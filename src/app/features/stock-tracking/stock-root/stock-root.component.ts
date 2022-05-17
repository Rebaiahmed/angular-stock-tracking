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
  }

  trackByFn(index, item) {
    return index;
  }

  removeStock(symbol) {
    this.localStorageService.removeStock(symbol);
    this.getStocksData();
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
