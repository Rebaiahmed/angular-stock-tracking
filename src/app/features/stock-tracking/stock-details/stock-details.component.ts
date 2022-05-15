import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss'],
})
export class StockDetailsComponent implements OnInit {
  currentQuoteSentiment: any;

  @Input() set quoteValue(value: any) {
    this.currentQuoteSentiment = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
