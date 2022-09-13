import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonnerComponent } from './donner.component';
import { BloodDonnerComponent } from './blood-donner/blood-donner.component';


const routes: Routes = [{
  path: '',
  component: DonnerComponent,
  children: [
    {
      path: 'blood-donner',
      component: BloodDonnerComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonnerRoutingModule { }

export const routedComponents = [
  DonnerComponent,
  BloodDonnerComponent
];
