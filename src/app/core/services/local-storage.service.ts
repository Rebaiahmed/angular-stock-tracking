import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  SYMBOLS_KEY = 'stocks';
  constructor() {}

  loadInitialState(): void {}

  getStocks() {
    return JSON.parse(localStorage.getItem(`${this.SYMBOLS_KEY}`) || '[]');
  }

  removeStock(symbol: string) {
    let existingEntries = this.getStocks();
    let index = existingEntries.indexOf(symbol);
    if (index !== -1) {
      existingEntries.splice(index, 1);
    }
    localStorage.setItem(this.SYMBOLS_KEY, JSON.stringify(existingEntries));
  }

  addNewStock(newSymbol: string) {
    let existingEntries = this.getStocks();
    existingEntries.push(newSymbol);
    localStorage.setItem(this.SYMBOLS_KEY, JSON.stringify(existingEntries));
  }
}
