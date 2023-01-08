import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse"
import { Observable } from 'rxjs';
import { SampleModel } from '../../models/response/sampleModel';
import { SearchSample } from "../../models/request/searchSample";

@Injectable({
    providedIn: 'root'
  })
  export class SampleService extends DefaultService {

    constructor(private http: HttpClient) {
     super('sample/')
    }

   /*  private httpOptions ={
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


    findById(id: String): Observable<ApiResponse<SampleModel>> {
      return this.http.get<ApiResponse<SampleModel>>(`${this.url}${id}`, this.httpOptions);
    }

    changeStatus(id: string): Observable<ApiResponse<SampleModel>> {
      return this.http.put<ApiResponse<SampleModel>>(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }

    findBySampleNumber(searchSample: SearchSample): Observable<ApiResponse<SampleModel>> {
      return this.http.get<ApiResponse<SampleModel>>(`${this.url}getsample/${searchSample.sampleNumber}`, this.httpOptions);
    }

    create(sample:SampleModel,idCollect:string,idEmp:string): Observable<ApiResponse<SampleModel>> {
      return this.http.post<ApiResponse<SampleModel>>(`${this.url}${idCollect}/${idEmp}`, sample, this.httpOptions);
    }

    getAll(type: string):Observable<ApiResponse<SampleModel>> {
      return this.http.get<ApiResponse<SampleModel>>(`${this.url}stockType/${type}`, this.httpOptions);
    }

  }
