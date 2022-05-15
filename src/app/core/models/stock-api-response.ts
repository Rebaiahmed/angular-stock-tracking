import { Stock } from './stock';

export interface StockApiResponse {
  count: number;
  result: Stock[];
}
