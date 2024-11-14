import { Component } from '@angular/core';
import { type Investment } from './investment.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  protected investmentResults: Investment[] = [];
}
