import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse";
import { DonnerModel } from "../../models/donnerModel";
import { SearchPerson } from "../../models/searchPerson";
import { Observable } from "rxjs";
import { PersonModel } from "../../models/personModel";



@Injectable({
    providedIn: 'root'
  })
  export class PersonService extends DefaultService {

    constructor(private http: HttpClient) {
     super('blooddonor')
    }

    private httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Basic bmFudTpuYW51'
      })
    };

    getPerson(searchPerson: SearchPerson ):Observable<ApiResponse<PersonModel>> {
      return this.http.get<ApiResponse<PersonModel>>(`${this.url}/${searchPerson.namePerson}
                                                                 /${searchPerson.surnamePerson}}`, this.httpOptions);
    }

    /*findById(id: String): Observable<ResponseApp<Employee>> {
      return this.http.get<ResponseApp<Employee>>(`${this.url}${id}`, this.httpOptions);
    }

    create(employee: Employee): Observable<ResponseApp<Employee>> {
      return this.http.post<ResponseApp<Employee>>(`${this.url}`, employee, this.httpOptions);
    }

    edit(employee: Employee): Observable<ResponseApp<Employee>> {
      return this.http.put<ResponseApp<Employee>>(`${this.url}${employee.id}`, employee, this.httpOptions);
    }

    delete(id: string): Observable<ResponseApp<Employee>> {
      return this.http.delete<ResponseApp<Employee>>(`${this.url}/${id}`);
    }*/

  }
