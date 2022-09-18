import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents } from './bloodonner-routing.module';



@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule
  ]
})
export class BloodDonnerModule { }
