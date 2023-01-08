import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse"
import { Observable } from 'rxjs';
import { SampleModel } from '../../models/response/sampleModel';
import { SearchSample } from "../../models/request/searchSample";
import { BloodTestModel } from "../../models/response/bloodTestModel";
import { SearchTransf } from "../../models/request/searchTransf";

@Injectable({
    providedIn: 'root'
  })
  export class TransfusionService extends DefaultService {

    constructor(private http: HttpClient) {
     super('transfusion/')
    }

    /* private httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Basic bmFudTpuYW51'
      })
    }; */

    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Authorization': 'Bearer' + `${this.token}`
      })
    };


    findById(id: String): Observable<ApiResponse<BloodTestModel>> {
      return this.http.get<ApiResponse<BloodTestModel>>(`${this.url}${id}`, this.httpOptions);
    }

    changeStatus(id: string): Observable<ApiResponse<BloodTestModel>> {
      return this.http.put<ApiResponse<BloodTestModel>>(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }

    findByTransfNumber(searchtransf: SearchTransf): Observable<ApiResponse<BloodTestModel>> {
      return this.http.get<ApiResponse<BloodTestModel>>(`${this.url}transfusion/${searchtransf.transfNumber}`, this.httpOptions);
    }

    create(testModel:BloodTestModel,idEmp:string,idSample:string): Observable<ApiResponse<SampleModel>> {
      return this.http.post<ApiResponse<SampleModel>>(`${this.url}/${idEmp}/${idSample}`, testModel, this.httpOptions);
    }


    /* getAll(type: string):Observable<ApiResponse<SampleModel>> {
      return this.http.get<ApiResponse<SampleModel>>(`${this.url}stockType/${type}`, this.httpOptions);
    } */

  }
