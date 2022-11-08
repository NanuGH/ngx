import { StockModel } from './../../models/response/stockModel';
import { BloodCollectModule } from '../../pages/blood-collection/bloodCollect.module';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse"
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class StockService extends DefaultService {

    constructor(private http: HttpClient) {
     super('stock/')
    }

    private httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Basic bmFudTpuYW51'
      })
    };


    findById(id: String): Observable<ApiResponse<StockModel>> {
      return this.http.get<ApiResponse<StockModel>>(`${this.url}${id}`, this.httpOptions);
    }

    changeStatus(id: string): Observable<ApiResponse<StockModel>> {
      return this.http.put<ApiResponse<StockModel>>(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }



  }
