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
     super('person/')
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
                                        .append("birthday",searchPerson.birthday)

      let queryJustName = new HttpParams().append("namePerson",searchPerson.namePerson)
      let queryJustSurname = new HttpParams().append("surnamePerson",searchPerson.surnamePerson)
      let queryJustBirthDay = new HttpParams().append("birthday",searchPerson.birthday)


         if(searchPerson.namePerson!=null && searchPerson.surnamePerson !=null && searchPerson.surnamePerson !=null){
           const options = {  params: queryParams, headers: headerss }
           return this.http.get<ApiResponse<PersonModel>>(`${this.url}getPersonOpts`, options);
         }

        if(searchPerson.namePerson!=null && searchPerson.surnamePerson ==null  && searchPerson.surnamePerson ==null){
          const options = {  params: queryJustName, headers: headerss }
          return this.http.get<ApiResponse<PersonModel>>(`${this.url}getPersonOpts`, options);
        }
        if(searchPerson.namePerson==null && searchPerson.surnamePerson != null  && searchPerson.surnamePerson ==null){
          const options = {  params: queryJustSurname, headers: headerss }
          return this.http.get<ApiResponse<PersonModel>>(`${this.url}getPersonOpts`, options);
        }
        if(searchPerson.namePerson==null && searchPerson.surnamePerson == null  && searchPerson.surnamePerson !=null){
          const options = {  params: queryJustBirthDay, headers: headerss }
          return this.http.get<ApiResponse<PersonModel>>(`${this.url}getPersonOpts`, options);
        }
        if(searchPerson.namePerson==null && searchPerson.surnamePerson == null ){
          const options = {headers: headerss }
          return this.http.get<ApiResponse<PersonModel>>(`${this.url}getPersonOpts`, options);
        }
    }


    findById(id: String): Observable<ApiResponse<PersonModel>> {
      return this.http.get<ApiResponse<PersonModel>>(`${this.url}${id}`, this.httpOptions);
    }

    edit(id: String,person: PersonModel): Observable<ApiResponse<PersonModel>> {
      return this.http.put<ApiResponse<PersonModel>>(`${this.url}${id}`, person, this.httpOptions);
    }


   /* getPerson(searchPerson: SearchPerson ):Observable<ApiResponse<PersonModel>> {
      return this.http.get<ApiResponse<PersonModel>>(`${this.url}/${searchPerson.namePerson}
                                                                 /${searchPerson.surnamePerson}`, this.httpOptions);
    }

    /*

    create(employee: Employee): Observable<ResponseApp<Employee>> {
      return this.http.post<ResponseApp<Employee>>(`${this.url}`, employee, this.httpOptions);
    }



    delete(id: string): Observable<ResponseApp<Employee>> {
      return this.http.delete<ResponseApp<Employee>>(`${this.url}/${id}`);
    }*/

  }
