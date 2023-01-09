/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { APP_BASE_HREF } from '@angular/common';
import { AuthGuard } from './auth-guard.service';
import { HeaderInterceptor } from './@core/interceptors/headers.interceptors.services';
import { LogInterceptor } from './@core/interceptors/loging.interceptors.services';

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),


/**************  ADY    ********** */

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          token: {
            class: NbAuthJWTToken,
            key: 'token',
          },
          baseEndpoint: 'http://localhost:8080/',
              login: {
                // ...
                endpoint: 'login',
                method: 'post',
                requireValidToken: true,
                redirect: {
                  success: '/',
                  failure: '/',
                },
                //defaultErrors: ['Login/Email combination is not correct, please try again.'],
                //defaultMessages: ['You have been successfully logged in.'],
                defaultErrors: ['A combinação de login/e-mail não está correta, tente novamente.'],
                defaultMessages: ['Você foi logado com sucesso.'],

              },

              resetPass: {
                // ...
                endpoint: 'resetPassTes',
                method: 'put',
                redirect: {
                  success: '/',
                  failure: null,
                },
                resetPasswordTokenKey: 'reset_password_token',
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Your password has been successfully changed.'],

              }

        }),



      ],
      forms: {
        resetPass: formSetting,
        login: formSetting,
        logout: {
          redirectDelay: 0,
      },
    },
  }),



/******************************** */



  ],
  bootstrap: [AppComponent],

  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
   { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    AuthGuard,
  ]
})
export class AppModule {
}
