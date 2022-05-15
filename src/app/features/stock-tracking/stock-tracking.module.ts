import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTrackingRoutingModule } from './stock-tracking-routing.module';
import { StockRootComponent } from './stock-root/stock-root.component';
import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockQuoteComponent } from './stock-quote/stock-quote.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

@NgModule({
  declarations: [StockRootComponent, StockTrackerComponent, StockListComponent, StockQuoteComponent, StockDetailsComponent],
  imports: [CommonModule, ReactiveFormsModule, StockTrackingRoutingModule],
})
export class StockTrackingModule {}
