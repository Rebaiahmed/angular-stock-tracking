import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Subject, takeUntil } from 'rxjs';
import { QuoteResponse } from '../../../core/models';
import { LocalStorageService, StockService } from '../../../core/services';

@Component({
  selector: 'app-stock-root',
  templateUrl: './stock-root.component.html',
  styleUrls: ['./stock-root.component.scss'],
})
export class StockRootComponent implements OnInit {
  private destroy$ = new Subject<void>();
  stocks: QuoteResponse[] = [];
  loading = false;

  constructor(
    private readonly stockService: StockService,
    private readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getStocksData();
  }

  getRecentSymbolValue(stockSymbol: string) {
    this.getStocksData();
  }

  getStocksData() {
    this.loading = true;
    let stocks = this.localStorageService.getStocks();
    stocks.map((stockSymbol) => {
      return forkJoin(
        this.stockService.getCompanyCurrentQuote(stockSymbol),
        this.stockService.getMatchedCompanyName(stockSymbol)
      )
        .pipe(
          map((element) => {
            return {
              ...element[0],
              name: element[1],
            } as QuoteResponse;
          }),
          takeUntil(this.destroy$)
        )
        .subscribe((result) => {
          this.stocks.push(result);
        });
    });
    this.loading = false;
  }

  trackByFn(index, item) {
    return index;
  }

  removeStock(symbol) {
    const quoteIndex = this.stocks.findIndex(function (item) {
      return item.symbol === symbol;
    });

    if (quoteIndex !== -1) {
      this.stocks.splice(quoteIndex, 1);
    }
    this.localStorageService.removeStock(symbol);
    this.getStocksData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.stocks = [];
  }
}
