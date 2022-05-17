import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { QuoteResponse, StockApiResponse } from '../models';
import { SentimentDataResponse } from '../models/sentiment-data';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  public apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiURL}`;
  }

  getMatchedCompany(searchValue: string): Observable<string> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', searchValue);
    return this.http
      .get<StockApiResponse>(this.apiUrl + '/search', {
        params: queryParams,
      })
      .pipe(map((response) => response.result[0].displaySymbol));
  }

  getCompanyCurrentQuote(symbol: string): Observable<QuoteResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('symbol', symbol);
    return this.http
      .get<QuoteResponse>(this.apiUrl + '/quote', {
        params: queryParams,
      })
      .pipe(
        map((response) => {
          return { ...response, symbol: symbol };
        })
      );
  }

  getStockSentimentData(
    symbol: string,
    from: string,
    to: string
  ): Observable<SentimentDataResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('symbol', symbol);
    queryParams = queryParams.append('from', ' 2020-03-15');
    queryParams = queryParams.append('to', '2020-06-15');
    return this.http.get<SentimentDataResponse>(
      this.apiUrl + '/stock/insider-sentiment',
      {
        params: queryParams,
      }
    );
  }
}
