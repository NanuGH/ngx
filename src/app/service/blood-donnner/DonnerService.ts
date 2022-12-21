import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse";
import { DonnerModel } from "../../models/response/donnerModel";
import { Observable } from "rxjs";
import { BloodDonner } from "../../models/request/bloodDonner";



@Injectable({
    providedIn: 'root'
  })
  export class DonnerService extends DefaultService {

    constructor(private http: HttpClient) {
     super('blooddonor/')
    }

    private httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Basic bmFudTpuYW51'
      })
    };

    donnerModel:DonnerModel;

    getDonner() {
      return this.http.get<ApiResponse<DonnerModel[]>>(`${this.url}`, this.httpOptions);
    }

    getDonnerBy(donner: BloodDonner): Observable<ApiResponse<DonnerModel>>{
      const headers = new HttpHeaders().set("Authorization","Basic bmFudTpuYW51" );
      let queryParams = new HttpParams().append("identifNumber", donner.identifNumber);
      const options = { params: queryParams, headers: headers };
      return this.http.get<ApiResponse<DonnerModel>>(`${this.url}options`, options);
    }

    /* getByDomain(dModel:DomainModel):Observable<ApiResponse<DomainModel>> {
      const headers = new HttpHeaders().set('Authorization','Basic bmFudTpuYW51');
      let queryDomain = new HttpParams().append("domain",dModel.domain)
      const options = {  params: queryDomain, headers: headers }
      return this.http.get<ApiResponse<DomainModel>>(`${this.url}getByDomain`, options);
    } */


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
