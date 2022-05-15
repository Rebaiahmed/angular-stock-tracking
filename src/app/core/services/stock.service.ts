import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { QuoteResponse } from '../models/quote';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  public apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiURL}`;
  }

  getCompanyName(searchString: string): Observable<string> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', searchString);
    return this.http
      .get<string>(this.apiUrl + '/search', {
        params: queryParams,
      })
      .pipe
      // map(response => response.body)
      ();
  }

  getCompanyCurrentQuotes(symbol: string): Observable<QuoteResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('symbol', symbol);
    return this.http.get<QuoteResponse>(this.apiUrl + '/quote', {
      params: queryParams,
    });
  }
}
