import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteResponse } from '../../../core/models';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { StockService } from '../../../core/services/stock.service';

const symbols = ['1', '2', '3', '4'];

@Component({
  selector: 'app-stock-root',
  templateUrl: './stock-root.component.html',
  styleUrls: ['./stock-root.component.scss'],
})
export class StockRootComponent implements OnInit {
  stocks$: Observable<QuoteResponse>[] = [];

  constructor(
    private readonly stockService: StockService,
    private readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.stockService.getCompanyCurrentQuotes('TEST').subscribe((results) => {
      console.log('results', results);
    });
  }
}
