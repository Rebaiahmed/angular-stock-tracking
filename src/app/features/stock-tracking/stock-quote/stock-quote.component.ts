import { Component, Input, OnInit } from '@angular/core';
import { QuoteResponse } from '../../../core/models';

@Component({
  selector: 'app-stock-quote',
  templateUrl: './stock-quote.component.html',
  styleUrls: ['./stock-quote.component.scss'],
})
export class StockQuoteComponent implements OnInit {
  currentQuoteValue?: QuoteResponse;

  @Input() set quoteValue(value: QuoteResponse) {
    this.currentQuoteValue = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
