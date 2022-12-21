import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloodDonnerComponent } from './bloodDonner.component';





const routes: Routes = [{
  path: '',
  component: BloodDonnerComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodDonnerRoutingModule { }

export const routedComponents = [
  BloodDonnerComponent,
];
