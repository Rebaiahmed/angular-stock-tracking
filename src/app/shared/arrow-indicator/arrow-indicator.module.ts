import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowIndicatorComponent } from './arrow-indicator.component';


@NgModule({
  declarations: [ArrowIndicatorComponent],
  imports: [
    CommonModule
  ],
  exports:[ArrowIndicatorComponent]
})
export class ArrowIndicatorModule { }
