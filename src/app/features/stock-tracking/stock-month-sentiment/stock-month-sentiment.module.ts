import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrowIndicatorModule } from 'src/app/shared/arrow-indicator/arrow-indicator.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockMonthSentimentComponent } from './stock-month-sentiment.component';



@NgModule({
  declarations: [StockMonthSentimentComponent],
  imports: [
    CommonModule,
    ArrowIndicatorModule
  ],
  exports:[StockMonthSentimentComponent]
})
export class StockMonthSentimentModule { }
