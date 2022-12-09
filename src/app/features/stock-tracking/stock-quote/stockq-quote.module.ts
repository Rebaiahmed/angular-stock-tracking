import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrowIndicatorModule } from 'src/app/shared/arrow-indicator/arrow-indicator.module';
import { StockQuoteComponent } from './stock-quote.component';



@NgModule({
  declarations: [StockQuoteComponent],
  imports: [
    CommonModule,
    ArrowIndicatorModule
  ],
  exports:[StockQuoteComponent]
})
export class StockqQuoteModule { }
