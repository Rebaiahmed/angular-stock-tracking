import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  SYMBOLS_KEY = 'stocks';
  constructor() {}

  loadInitialState(): void {}

  setItem(key: string, value: any) {
    localStorage.setItem(`${key}`, JSON.stringify(value));
  }

  getStocks() {
    return JSON.parse(localStorage.getItem(`${this.SYMBOLS_KEY}`) || '[]');
  }

  removeItem(key: string) {
    localStorage.removeItem(`${key}`);
  }

  addEntry(newSymbol: string) {
    let existingEntries = this.getStocks();
    existingEntries.push(newSymbol);
    localStorage.setItem(this.SYMBOLS_KEY, JSON.stringify(existingEntries));
  }
}
