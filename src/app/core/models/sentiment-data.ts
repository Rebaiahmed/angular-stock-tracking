export interface SentimentData {
  change: number;
  month: number;
  mspr: number;
  symbol: string;
  year: number;
}

export interface SentimentDataResponse {
  data: Array<SentimentData>;
  symbol: string;
}
