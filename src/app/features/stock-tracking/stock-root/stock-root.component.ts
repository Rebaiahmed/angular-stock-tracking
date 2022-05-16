import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { QuoteResponse, Stock } from '../../../core/models';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { StockService } from '../../../core/services/stock.service';

const symbols = ['1', '2', '3', '4'];

@Component({
  selector: 'app-stock-root',
  templateUrl: './stock-root.component.html',
  styleUrls: ['./stock-root.component.scss'],
})
export class StockRootComponent implements OnInit {
  stocks$: Observable<QuoteResponse[]>;

  constructor(
    private readonly stockService: StockService,
    private readonly localStorageService: LocalStorageService
  ) {}

  getRecentSymbolValue(symbol: any) {
    this.stockService.getCompanyCurrentQuotes(symbol).subscribe((result) => {
      console.log('result', result);
    });
  }

  ngOnInit(): void {
    let stocks = this.localStorageService.getStocks();
    this.stocks$ = of(
      stocks.map((stockSymbol: string) => {
        return this.stockService.getCompanyCurrentQuotes(stockSymbol);
      })
    );
  }
}
