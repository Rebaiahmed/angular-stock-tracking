import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ArrowIndicatorModule } from 'src/app/shared/arrow-indicator/arrow-indicator.module';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockMonthSentimentComponent } from './stock-month-sentiment/stock-month-sentiment.component';
import { StockMonthSentimentModule } from './stock-month-sentiment/stock-month-sentiment.module';
import { StockQuoteComponent } from './stock-quote/stock-quote.component';
import { StockqQuoteModule } from './stock-quote/stockq-quote.module';
import { StockRootComponent } from './stock-root/stock-root.component';
import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';
import { StockTrackingRoutingModule } from './stock-tracking-routing.module';

@NgModule({
  declarations: [
    StockRootComponent,
    StockTrackerComponent,
    StockDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StockTrackingRoutingModule,
    SharedModule,
    CoreModule,
    StockMonthSentimentModule,
    StockqQuoteModule
  ],
})
export class StockTrackingModule {}
