import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../core/services/local-storage.service';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.scss'],
})
export class StockTrackerComponent implements OnInit {
  constructor(private readonly localStorageService: LocalStorageService) {}
  stockSearcher = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(5),
  ]);

  @Output() symbolEvent$ = new EventEmitter<string>();

  ngOnInit(): void {}

  trackStock(): void {
    this.localStorageService.addNewStock(this.stockSearcher.value);
    this.symbolEvent$.emit(this.stockSearcher.value);
  }
}
