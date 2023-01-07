import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse";
import { DonnerModel } from "../../models/response/donnerModel";
import { Observable } from "rxjs";
import { SearchDonner } from "../../models/request/searchDonner";



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


    getDonner() {
      return this.http.get<ApiResponse<DonnerModel[]>>(`${this.url}`, this.httpOptions);
    }

    getDonnerBy(searchDonner : SearchDonner): Observable<ApiResponse<DonnerModel>>{
      const headers = new HttpHeaders().set("Authorization","Basic bmFudTpuYW51" );
      let queryParams = new HttpParams().append("identifNumber", searchDonner.identifNumber);
      const options = { params: queryParams, headers: headers };

      return this.http.get<ApiResponse<DonnerModel>>(`${this.url}opts`, options);
    }



    create(donner: DonnerModel,idEmpl:string,idPerson:string): Observable<ApiResponse<DonnerModel>> {
      return this.http.post<ApiResponse<DonnerModel>>(`${this.url}${idEmpl}/${idPerson}`, donner, this.httpOptions);
    }

    findById(id: String): Observable<ApiResponse<DonnerModel>> {
      return this.http.get<ApiResponse<DonnerModel>>(`${this.url}${id}`, this.httpOptions);
    }



    edit(donner: DonnerModel,idDonner:string,idEmpl:string): Observable<ApiResponse<DonnerModel>> {
      return this.http.put<ApiResponse<DonnerModel>>(`${this.url}${idDonner}/${idEmpl}`, donner, this.httpOptions);
    }

    changeStatus(id: string): Observable<ApiResponse<DonnerModel>> {
      return this.http.put<ApiResponse<DonnerModel>>(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }


    getByOne(value: string): Observable<ApiResponse<DonnerModel>>{
      const headerss = new HttpHeaders().set('Authorization','Basic bmFudTpuYW51');

      let queryParams = new HttpParams().append("value",value);
      const options = {  params: queryParams, headers: headerss }

      return this.http.get<ApiResponse<DonnerModel>>(`${this.url}getDonnerByOne`, options);
    }
  }
