import { StockModel } from './../../models/response/stockModel';
import { BloodCollectModule } from '../../pages/blood-collection/bloodCollect.module';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse"
import { Observable } from 'rxjs';
import { SearchStock } from '../../models/request/searchStock';

@Injectable({
    providedIn: 'root'
  })
  export class StockService extends DefaultService {

    constructor(private http: HttpClient) {
     super('stock/')
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


    findById(id: String): Observable<ApiResponse<StockModel>> {
      return this.http.get<ApiResponse<StockModel>>(`${this.url}${id}`, this.httpOptions);
    }

    changeStatus(id: string): Observable<ApiResponse<StockModel>> {
      return this.http.put<ApiResponse<StockModel>>(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }

    findByCollectionNumber(searchStock: SearchStock): Observable<ApiResponse<StockModel>> {
      return this.http.get<ApiResponse<StockModel>>(`${this.url}getStockOpts/${searchStock.collectionNumber}`, this.httpOptions);
    }

    create(stock:StockModel,idCollect:string,idEmp:string): Observable<ApiResponse<StockModel>> {
      return this.http.post<ApiResponse<StockModel>>(`${this.url}${idCollect}/${idEmp}`, stock, this.httpOptions);
    }


    getAll():Observable<ApiResponse<StockModel>> {
      return this.http.get<ApiResponse<StockModel>>(`${this.url}stockType/`, this.httpOptions);
    }

    getAllBy(type: string):Observable<ApiResponse<StockModel>> {
      return this.http.get<ApiResponse<StockModel>>(`${this.url}stockType/${type}`, this.httpOptions);
    }








  }
