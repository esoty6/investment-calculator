import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentResultService } from './investment-result.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentResultService = inject(InvestmentResultService);

  protected investmentResults = computed(() =>
    this.investmentResultService.investmentResult()
  );
}
