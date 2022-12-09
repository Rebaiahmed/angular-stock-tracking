import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowIndicatorComponent } from './arrow-indicator/arrow-indicator.component';
import { MinusPipe } from './pipes/minus.pipe';
import { AgePipe } from './pipes/age.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FileSizePipePipe } from './pipes/file-size-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { SqrtPipePipe } from './pipes/sqrt-pipe.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BannersComponent } from './banners/banners.component';
import { RatingComponent } from './rating/rating.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';

@NgModule({
  declarations: [ArrowIndicatorComponent, MinusPipe, AgePipe, FilterPipePipe, FileSizePipePipe, SqrtPipePipe, BannersComponent, RatingComponent, GenericTableComponent, GenericDialogComponent,],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,AgGridModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,],
  exports: [ArrowIndicatorComponent, MinusPipe, AgePipe, FilterPipePipe, FileSizePipePipe, SqrtPipePipe,BannersComponent, RatingComponent, GenericTableComponent, GenericDialogComponent,],
})
export class SharedModule {}
