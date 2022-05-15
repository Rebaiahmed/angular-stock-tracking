import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss'],
})
export class StockDetailsComponent implements OnInit {
  currentQuoteSentiment: any;

  @Input() set quoteValue(value: any) {
    this.currentQuoteSentiment = value;
  }

  constructor(private location: Location) {}

  ngOnInit(): void {}

  backToListStock(): void {
    this.location.back();
  }
}
