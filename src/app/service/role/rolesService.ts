import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse";
import { Observable } from "rxjs";
import { RolesModel } from "../../models/response/RolesModel";
import { SearchRole } from "../../models/request/searchRole";

@Injectable({
  providedIn: "root",
})
export class RolesService extends DefaultService {
  constructor(private http: HttpClient) {
    super("roles/");
  }

 /*  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Basic bmFudTpuYW51",
    }),
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

  findByRoleName(dmfunction: string): Observable<ApiResponse<RolesModel>> {
    return this.http.get<ApiResponse<RolesModel>>(`${this.url}roles/${dmfunction}`, this.httpOptions);
  }

  findAllRole(): Observable<ApiResponse<RolesModel>> {
    return this.http.get<ApiResponse<RolesModel>>(`${this.url}`, this.httpOptions);
  }

}
