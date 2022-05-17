import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteResponse } from '../../../core/models';

@Component({
  selector: 'app-stock-quote',
  templateUrl: './stock-quote.component.html',
  styleUrls: ['./stock-quote.component.scss'],
})
export class StockQuoteComponent implements OnInit {
  @Output() removeStockEvent = new EventEmitter<string>();
  currentQuoteValue?: QuoteResponse;

  @Input() set quoteValue(value: QuoteResponse) {
    this.currentQuoteValue = value;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToStockDetails(): void {
    this.router.navigate(['/sentiment/' + this.currentQuoteValue?.name]);
  }

  removeItem(): void {
    this.removeStockEvent.emit(this.currentQuoteValue.symbol);
  }
}
