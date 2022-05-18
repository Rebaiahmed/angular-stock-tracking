import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { SentimentDataResponse } from '../../../core/models/sentiment-data';
import { StockService } from '../../../core/services/stock.service';
import { formatDate } from '../../../shared/utils/date-utils';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss'],
})
export class StockDetailsComponent implements OnInit {
  private destroy$ = new Subject<void>();
  currentQuoteSentiment: SentimentDataResponse;
  currentStockName = '';

  constructor(
    private location: Location,
    private readonly stockService: StockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentStockName = this.route.snapshot.queryParamMap.get('name');
    this.route.params
      .pipe(
        switchMap((params) => {
          let previousThreeMonth = new Date();
          previousThreeMonth.setMonth(previousThreeMonth.getMonth() - 3);
          const fromMonth = formatDate(previousThreeMonth);
          const lastMonth = formatDate(new Date());
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
