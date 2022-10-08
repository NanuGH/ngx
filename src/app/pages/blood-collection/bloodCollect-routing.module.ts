import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloodCollectComponent } from './bloodCollect.component';


const routes: Routes = [
  {
  path: '',
  component: BloodCollectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule { }

export const routedComponents = [
  BloodCollectComponent,
];
