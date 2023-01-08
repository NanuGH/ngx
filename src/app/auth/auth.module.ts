import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbSelectModule,

} from '@nebular/theme';


import { NgxLoginComponent } from './login/login.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbCardModule,
    NbAuthModule,
  ],
  declarations: [
    // ... here goes our new components
    NgxLoginComponent,
/*     NgxRegisterComponent */
],

providers: [],

})
export class NgxAuthModule {
}