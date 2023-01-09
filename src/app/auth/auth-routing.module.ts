import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxLoginComponent } from './login/login.component';
import { NgxResetComponent } from './reset-password/reset-password.component';


export const routes: Routes = [

  {
        path: 'login',
        component: NgxLoginComponent, // <---
  },

  {
    path: 'reset-password',
    component: NgxResetComponent, // <---
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
