import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloodDonnerComponent } from './blood-donner.component';

const routes: Routes = [{
  path: '',
  component: BloodDonnerComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BloodonnerRoutingModule { }

export const routedComponents = [
  BloodDonnerComponent
];

