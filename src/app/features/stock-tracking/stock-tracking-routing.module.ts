import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockRootComponent } from './stock-root/stock-root.component';

const routes: Routes = [{ path: '', component: StockRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockTrackingRoutingModule {}
