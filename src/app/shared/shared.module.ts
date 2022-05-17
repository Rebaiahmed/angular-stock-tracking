import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowIndicatorComponent } from './arrow-indicator/arrow-indicator.component';
import { MinusPipe } from './pipes/minus.pipe';

@NgModule({
  declarations: [ArrowIndicatorComponent, MinusPipe],
  imports: [CommonModule],
  exports: [ArrowIndicatorComponent, MinusPipe],
})
export class SharedModule {}
