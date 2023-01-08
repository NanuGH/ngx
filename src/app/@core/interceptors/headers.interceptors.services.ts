import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { NbAuthService, NbAuthOAuth2Token, NbAuthJWTToken } from "@nebular/auth";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private authService: NbAuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
  /*     if (!token.isValid()) {
        this.router.navigate(["auth/login"]);
      } else {
        console.log(req.method);
        if(req.method=='GET')
                req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

        if (
          req.method == "POST" && 
          !req.url.includes(environment.identityProviderHost)
        )

        //var requestTokin = localStorage.getItem('auth_app_token'); 
       // const object = JSON.parse(requestTokin)
    
          req = req.clone({
            headers: req.headers.set("Content-Type", "application/json"),
          });
      } */
    });

    return next.handle(req);
  }
 
}
