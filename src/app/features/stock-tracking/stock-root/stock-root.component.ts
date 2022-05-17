import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Subject, takeUntil, tap } from 'rxjs';
import { QuoteResponse } from '../../../core/models';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { StockService } from '../../../core/services/stock.service';

@Component({
  selector: 'app-stock-root',
  templateUrl: './stock-root.component.html',
  styleUrls: ['./stock-root.component.scss'],
})
export class StockRootComponent implements OnInit {
  private destroy$ = new Subject<void>();
  stocks: QuoteResponse[] = [];

  constructor(
    private readonly stockService: StockService,
    private readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getStocksData();
  }

  getStocksData() {
    let stocks = this.localStorageService.getStocks();
    forkJoin(
      stocks.map((stockSymbol: string) => {
        return this.stockService.getCompanyCurrentQuotes(stockSymbol);
      })
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: QuoteResponse[]) => {
        this.stocks = result;
      });
  }

  trackByFn(index, item) {
    return index;
  }

  removeStock(symbol) {
    this.localStorageService.removeStock(symbol);
    this.getStocksData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
