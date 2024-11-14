import { Injectable, signal } from '@angular/core';
import { type Investment, type InvestmentResult } from './investment.model';

@Injectable({ providedIn: 'root' })
export class InvestmentResultService {
  readonly investmentResult = signal<InvestmentResult[] | undefined>(undefined);

  addInvestmentData(investment: Investment) {
    const calculatedData = this.calculateInvestmentResults(investment);

    this.investmentResult.set(calculatedData);
  }

  private calculateInvestmentResults({
    initialInvestment,
    duration,
    expectedReturn,
    annualInvestment,
  }: Investment) {
    const annualData: InvestmentResult[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    return annualData;
  }
}
