import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
   // localStorage.removeItem('auth_app_token');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
           //console.log(this.authService.isAuthenticated());
          // console.log(this.authService);
          if (!authenticated) {
            console.log(authenticated);
            this.router.navigate(['auth/login']);
          } 
        }),
      );
    
  }


  /*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;
      this.router.navigate(['auth/login']);
      
    return false;

  }
  */
}