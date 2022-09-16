import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
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
     super('person/getPersonOpts')
    }

    private httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Basic bmFudTpuYW51'
      })
    };

    getPersonMultipleParams(searchPerson: SearchPerson ):Observable<ApiResponse<PersonModel>> {

      const headerss = new HttpHeaders().set('Authorization','Basic bmFudTpuYW51');

      let queryParams = new HttpParams().append("namePerson",searchPerson.namePerson)
                                        .append("surnamePerson",searchPerson.surnamePerson)

      let queryJustName = new HttpParams().append("namePerson",searchPerson.namePerson)

      let queryJustSurname = new HttpParams().append("surnamePerson",searchPerson.surnamePerson)


         //const options = {  params: queryParams, headers: headerss }
         if(searchPerson.namePerson!=null && searchPerson.surnamePerson !=null){
           const options = {  params: queryParams, headers: headerss }
           console.log("os 2");

           return this.http.get<ApiResponse<PersonModel>>(`${this.url}`, options);
         }

        if(searchPerson.namePerson!=null && searchPerson.surnamePerson ==null){
          const options = {  params: queryJustName, headers: headerss }
          console.log("so nome");
          return this.http.get<ApiResponse<PersonModel>>(`${this.url}`, options);
        }
        if(searchPerson.namePerson==null && searchPerson.surnamePerson != null){
          const options = {  params: queryJustSurname, headers: headerss }
          console.log("so apelido");
          return this.http.get<ApiResponse<PersonModel>>(`${this.url}`, options);
        }
        if(searchPerson.namePerson==null && searchPerson.surnamePerson == null){
          const options = {headers: headerss }
          console.log("nenhum");
          return this.http.get<ApiResponse<PersonModel>>(`${this.url}`, options);
        }


       /* const options = {  params: queryParams, headers: headerss }
        return this.http.get<ApiResponse<PersonModel>>(`${this.url}`, options);*/




    }




/*
    getPerson(searchPerson: SearchPerson ):Observable<ApiResponse<PersonModel>> {
      return this.http.get<ApiResponse<PersonModel>>(`${this.url}/${searchPerson.namePerson}
                                                                 /${searchPerson.surnamePerson}`, this.httpOptions);
    }
*/
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
