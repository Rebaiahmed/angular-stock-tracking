import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockRootComponent } from './stock-root/stock-root.component';

const routes: Routes = [
  {
    path: '',
    component: StockRootComponent,
  },
  { path: 'sentiment/:symbol', component: StockDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockTrackingRoutingModule {}
