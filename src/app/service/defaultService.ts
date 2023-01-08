import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";


//conecao com api
export abstract class DefaultService {
    /* protected url: string;
    protected resource: string;


    constructor(resource: string) {
      this.url = `${environment.url}${resource}`;
    } */

    protected url: string;
    protected resource: string;
    protected object: string;
    protected token: string;
    protected headers: object;

    constructor(resource: string) {

      var requestTokin = localStorage.getItem('auth_app_token')
      const object = JSON.parse(requestTokin)
      this.token = object.value
      console.log(this.token)
      this.url = `${environment.url}${resource}`
  }
}
