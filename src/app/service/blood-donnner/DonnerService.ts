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



    create(donner: DonnerModel): Observable<ApiResponse<DonnerModel>> {
      return this.http.post<ApiResponse<DonnerModel>>(`${this.url}`, donner, this.httpOptions);
    }

    findById(id: String): Observable<ApiResponse<DonnerModel>> {
      return this.http.get<ApiResponse<DonnerModel>>(`${this.url}${id}`, this.httpOptions);
    }

    edit(donner: DonnerModel): Observable<ApiResponse<DonnerModel>> {
      return this.http.put<ApiResponse<DonnerModel>>(`${this.url}${donner}`, donner, this.httpOptions);
    }



    /*


    delete(id: string): Observable<ResponseApp<Employee>> {
      return this.http.delete<ResponseApp<Employee>>(`${this.url}/${id}`);
    }*/

  }
