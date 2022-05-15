import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.scss'],
})
export class StockTrackerComponent implements OnInit {
  stockSearcher = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(5),
  ]);

  constructor() {}

  ngOnInit(): void {}

  trackStock(): void {
    alert('tracked!');
  }
}
