import { DomainModel } from './../../models/response/domainModel';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse";
import { SearchPerson } from "../../models/request/searchPerson";
import { Observable } from "rxjs";
import { PersonModel } from "../../models/response/personModel";


@Injectable({
    providedIn: 'root'
  })
  export class DomainService extends DefaultService {

    constructor(private http: HttpClient) {
     super('domain/')
    }

    private httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Basic bmFudTpuYW51'
      })
    };

    get():Observable<ApiResponse<DomainModel>> {
      return this.http.get<ApiResponse<DomainModel>>(`${this.url}`, this.httpOptions);
    }

    getByDomain(dModel:DomainModel):Observable<ApiResponse<DomainModel>> {
      const headers = new HttpHeaders().set('Authorization','Basic bmFudTpuYW51');
      let queryDomain = new HttpParams().append("domain",dModel.domain)
      const options = {  params: queryDomain, headers: headers }
      return this.http.get<ApiResponse<DomainModel>>(`${this.url}getByDomain`, options);
    }

    getBySelfId(selfId:string):Observable<ApiResponse<DomainModel>> {
      const headers = new HttpHeaders().set('Authorization','Basic bmFudTpuYW51');
      let querySelfId = new HttpParams().append("selfId",selfId)
      const options = {  params: querySelfId, headers: headers }
      return this.http.get<ApiResponse<DomainModel>>(`${this.url}getBySelfId`, options);
    }

    create(domain: DomainModel): Observable<ApiResponse<DomainModel>> {
      return this.http.post<ApiResponse<DomainModel>>(`${this.url}`,domain, this.httpOptions);
    }

    delete(id: string): Observable<ApiResponse<DomainModel>> {
      return this.http.delete<ApiResponse<DomainModel>>(`${this.url}/${id}`);
    }

    edit(id: String,domain: DomainModel): Observable<ApiResponse<DomainModel>> {
      return this.http.put<ApiResponse<DomainModel>>(`${this.url}${id}`, domain, this.httpOptions);
    }


   /* findById(id: String): Observable<ApiResponse<PersonModel>> {
      return this.http.get<ApiResponse<PersonModel>>(`${this.url}${id}`, this.httpOptions);
    }

    edit(id: String,person: PersonModel): Observable<ApiResponse<PersonModel>> {
      return this.http.put<ApiResponse<PersonModel>>(`${this.url}${id}`, person, this.httpOptions);
    }

    /* edit(person: PersonModel): Observable<ApiResponse<PersonModel>> {
      return this.http.put<ApiResponse<PersonModel>>(`${this.url}${person.id}`, person, this.httpOptions);
    }

    create(person: PersonModel): Observable<ApiResponse<PersonModel>> {
      return this.http.post<ApiResponse<PersonModel>>(`${this.url}`, person, this.httpOptions);
    }


    delete(id: string): Observable<ResponseApp<Employee>> {
      return this.http.delete<ResponseApp<Employee>>(`${this.url}/${id}`);
    }*/

  }
