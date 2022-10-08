import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse";
import { DonnerModel } from "../../models/response/donnerModel";



@Injectable({
    providedIn: 'root'
  })
  export class BloodCollectService extends DefaultService {

    constructor(private http: HttpClient) {
     super('blooddonor')
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
