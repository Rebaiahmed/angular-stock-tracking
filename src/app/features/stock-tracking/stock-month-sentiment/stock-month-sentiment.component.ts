import { Component, Input, OnInit } from '@angular/core';
import { SentimentData } from '../../../core/models';
@Component({
  selector: 'app-stock-month-sentiment',
  templateUrl: './stock-month-sentiment.component.html',
  styleUrls: ['./stock-month-sentiment.component.scss'],
})
export class StockMonthSentimentComponent implements OnInit {
  monthlySentiment: SentimentData;

  @Input() set monthlySentimentValue(value: SentimentData) {
    this.monthlySentiment = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
