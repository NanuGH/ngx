import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockpComponent } from './stockp.component';


const routes: Routes = [
  {
  path: '',
  component: StockpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockpRoutingModule { }

export const routedComponents = [
  StockpComponent,
];
