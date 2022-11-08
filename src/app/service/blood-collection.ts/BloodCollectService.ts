import { LocalData } from 'ng2-completer';
import { BloodCollectModule } from './../../pages/blood-collection/bloodCollect.module';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse"
import { SearchBloodCollect } from '../../models/request/searchbloodCollect';
import { Observable } from 'rxjs';
import { BloodCollection } from '../../models/request/bloodCollection';

@Injectable({
    providedIn: 'root'
  })
  export class BloodCollectService extends DefaultService {

    constructor(private http: HttpClient) {
     super('bloodcollection/')
    }

    private httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Basic bmFudTpuYW51'
      })
    };


    getBloodColectMultParams(searchBloodCollect: SearchBloodCollect): Observable<ApiResponse<BloodCollectModule>> {
      const headerss = new HttpHeaders().set("Authorization","Basic bmFudTpuYW51" );

      let queryParams = new HttpParams().append("collectionNumber", searchBloodCollect.collectionNumber)
                                        .append("insertionDate", searchBloodCollect.insertionDate);

      let queryJustCollectionNumber = new HttpParams().append("collectionNumber",searchBloodCollect.collectionNumber);

      let queryJustInsertionDate = new HttpParams().append("insertionDate", searchBloodCollect.insertionDate);
      /********/

      if ( searchBloodCollect.collectionNumber != null && searchBloodCollect.insertionDate != null) {
        const options = { params: queryParams, headers: headerss };

        return this.http.get<ApiResponse<BloodCollectModule>>(`${this.url}getBloodCollectionpts`,options);
      }

      if (searchBloodCollect.collectionNumber != null && searchBloodCollect.insertionDate == null) {
        const options = { params: queryJustCollectionNumber, headers: headerss };
        console.log("seg");
        return this.http.get<ApiResponse<BloodCollectModule>>(`${this.url}getBloodCollectionpts`, options);
      }
      if (searchBloodCollect.collectionNumber == null && searchBloodCollect.insertionDate != null) {
        const options = { params: queryJustInsertionDate, headers: headerss };
        console.log("terce");
        return this.http.get<ApiResponse<BloodCollectModule>>(`${this.url}getBloodCollectionpts`,options);
      }
      if (searchBloodCollect.collectionNumber == null && searchBloodCollect.insertionDate == null) {
        const options = { headers: headerss };
        return this.http.get<ApiResponse<BloodCollectModule>>(`${this.url}getBloodCollectionpts`,options);
      }
    }

    findById(id: String): Observable<ApiResponse<BloodCollectModule>> {
      return this.http.get<ApiResponse<BloodCollectModule>>(`${this.url}${id}`, this.httpOptions);
    }

    changeStatus(id: string): Observable<ApiResponse<BloodCollectModule>> {
      return this.http.put<ApiResponse<BloodCollectModule>>(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }

    create(person: BloodCollection): Observable<ApiResponse<BloodCollection>> {
      return this.http.post<ApiResponse<BloodCollection>>(`${this.url}`, person, this.httpOptions);
    }



  }
