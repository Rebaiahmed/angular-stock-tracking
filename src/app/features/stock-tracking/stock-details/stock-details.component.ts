import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { SentimentDataResponse } from '../../../core/models/sentiment-data';
import { StockService } from '../../../core/services/stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss'],
})
export class StockDetailsComponent implements OnInit {
  private destroy$ = new Subject<void>();
  currentQuoteSentiment: SentimentDataResponse;

  constructor(
    private location: Location,
    private readonly stockService: StockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const fromMonth = new Date().getMonth().toString();
          const lastMonth = new Date().getMonth().toString();
          return this.stockService.getStockSentimentData(
            params['symbol'],
            fromMonth,
            lastMonth
          );
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((sentimentResult) => {
        this.currentQuoteSentiment = sentimentResult;
      });
  }

  backToListStock(): void {
    this.location.back();
  }
}
