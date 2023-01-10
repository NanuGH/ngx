import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxLoginComponent } from './login/login.component';
import { NgxResetPasswordComponent } from './reset-password/reset-password.component';


export const routes: Routes = [

  {
        path: 'login',
        component: NgxLoginComponent, // <---
  },

  {
    path: 'reset-password',
    component: NgxResetPasswordComponent, // <---
},



/*   {
    path: 'register',
    component: NgxRegisterComponent, // <---
}, */


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
