import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloodtypeComponent } from './bloodtype.component';





const routes: Routes = [{
  path: '',
  component: BloodtypeComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodtypeRoutingModule { }

export const routedComponents = [
  BloodtypeComponent,
];
