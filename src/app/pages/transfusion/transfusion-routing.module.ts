import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransfusionComponent} from './transfusion.component';


const routes: Routes = [
  {
  path: '',
  component: TransfusionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransfusionRoutingModule { }

export const routedComponents = [
  TransfusionComponent,
];
