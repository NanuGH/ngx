import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse"
import { Observable } from 'rxjs';
import { SampleModel } from '../../models/response/sampleModel';
import { SearchSample } from "../../models/request/searchSample";
import { BloodTestModel } from "../../models/response/bloodTestModel";

@Injectable({
    providedIn: 'root'
  })
  export class BloodTestService extends DefaultService {

    constructor(private http: HttpClient) {
     super('bloodtest/')
    }

    private httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Basic bmFudTpuYW51'
      })
    };


    findById(id: String): Observable<ApiResponse<BloodTestModel>> {
      return this.http.get<ApiResponse<BloodTestModel>>(`${this.url}${id}`, this.httpOptions);
    }

    changeStatus(id: string): Observable<ApiResponse<BloodTestModel>> {
      return this.http.put<ApiResponse<BloodTestModel>>(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }

    findByTestNumber(searchTest: SearchSample): Observable<ApiResponse<BloodTestModel>> {
      return this.http.get<ApiResponse<BloodTestModel>>(`${this.url}test/${searchTest.sampleNumber}`, this.httpOptions);
    }

    create(testModel:BloodTestModel,idEmp:string,idSample:string): Observable<ApiResponse<SampleModel>> {
      return this.http.post<ApiResponse<SampleModel>>(`${this.url}/${idEmp}/${idSample}`, testModel, this.httpOptions);
    }

    /* getAll(type: string):Observable<ApiResponse<SampleModel>> {
      return this.http.get<ApiResponse<SampleModel>>(`${this.url}stockType/${type}`, this.httpOptions);
    } */

  }
