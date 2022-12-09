import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AgePipe } from './pipes/age.pipe';
import { FileSizePipePipe } from './pipes/file-size-pipe.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { MinusPipe } from './pipes/minus.pipe';
import { SqrtPipePipe } from './pipes/sqrt-pipe.pipe';

@NgModule({
  declarations: [ MinusPipe, AgePipe, FilterPipePipe, FileSizePipePipe, SqrtPipePipe],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,AgGridModule,
],
  exports: [MinusPipe, AgePipe, FilterPipePipe, FileSizePipePipe, SqrtPipePipe,
],
})
export class SharedModule {}
