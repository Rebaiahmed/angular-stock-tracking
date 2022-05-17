import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTrackingRoutingModule } from './stock-tracking-routing.module';
import { StockRootComponent } from './stock-root/stock-root.component';
import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockQuoteComponent } from './stock-quote/stock-quote.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockMonthSentimentComponent } from './stock-month-sentiment/stock-month-sentiment.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    StockRootComponent,
    StockTrackerComponent,

    StockQuoteComponent,
    StockDetailsComponent,
    StockMonthSentimentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StockTrackingRoutingModule,
    SharedModule,
  ],
})
export class StockTrackingModule {}
