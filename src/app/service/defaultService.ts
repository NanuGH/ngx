import { environment } from "../../environments/environment";


//conecao com api
export abstract class DefaultService {
    protected url: string;
    protected resource: string;

    constructor(resource: string) {
      this.url = `${environment.url}${resource}`;
    }

}
