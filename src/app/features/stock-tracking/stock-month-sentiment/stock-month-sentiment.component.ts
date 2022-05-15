import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-month-sentiment',
  templateUrl: './stock-month-sentiment.component.html',
  styleUrls: ['./stock-month-sentiment.component.scss'],
})
export class StockMonthSentimentComponent implements OnInit {
  monthlySentiment: any;

  @Input() set monthlySentimentValue(value: any) {
    this.monthlySentiment = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
