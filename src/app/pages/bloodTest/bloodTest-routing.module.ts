import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloodTestComponent} from './bloodTest.component';


const routes: Routes = [
  {
  path: '',
  component: BloodTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodTestRoutingModule { }

export const routedComponents = [
  BloodTestComponent,
];
