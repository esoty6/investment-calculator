export type InvestmentResult = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};

export type Investment = {
  initialInvestment: number;
  annualInvestment: number;
  duration: number;
  expectedReturn: number;
};
