import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonChangeStockComponent } from './ButtonUpdatePayment/ButtonChangeStockComponent';
import { StockComponent } from './stock.component';


const routes: Routes = [
  {
  path: '',
  component: StockComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule { }

export const routedComponents = [
  StockComponent,
  ButtonChangeStockComponent,
];
