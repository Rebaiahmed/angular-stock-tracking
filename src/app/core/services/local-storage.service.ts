import { Injectable } from '@angular/core';
const APP_PREFIX = 'ANMS-';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  loadInitialState(): void {}

  setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`) || '{}');
  }

  removeItem(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }
}
