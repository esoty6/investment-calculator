import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultService } from '../investment-result/investment-result.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  protected initialInvestment = signal(0);
  protected annualInvestment = signal(0);
  protected expectedReturn = signal(5);
  protected duration = signal(10);

  private investmentResultService = inject(InvestmentResultService);

  protected onSubmit() {
    this.investmentResultService.addInvestmentData({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });

    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(5);
    this.duration.set(10);
  }
}
