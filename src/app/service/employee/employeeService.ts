import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultService } from "../defaultService";
import { ApiResponse } from "../../models/apiResponse";
import { Observable } from "rxjs";
import { SearchEmployee } from "../../models/request/searchEmployee";
import { EmployeeModel } from "../../models/response/EmployeeModel";

@Injectable({
  providedIn: "root",
})
export class EmployeeService extends DefaultService {
  constructor(private http: HttpClient) {
    super("employee/");
  }

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Basic bmFudTpuYW51",
    }),
  };

  getEmployeeMultipleParams(searchEmployee: SearchEmployee): Observable<ApiResponse<EmployeeModel>> {
    const headerss = new HttpHeaders().set("Authorization","Basic bmFudTpuYW51" );

    let queryParams = new HttpParams().append("identifNumber", searchEmployee.identifNumber)
                                      .append("email", searchEmployee.email);

    let queryJustIdentifNumber = new HttpParams().append("identifNumber",searchEmployee.identifNumber);

    let queryJustEmail = new HttpParams().append("email", searchEmployee.email);

    if (searchEmployee.identifNumber != null && searchEmployee.email != null) {
      const options = { params: queryParams, headers: headerss };
      return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}getEmplOpts`,options);
    }

    if (searchEmployee.identifNumber != null && searchEmployee.email == null) {
      const options = { params: queryJustIdentifNumber, headers: headerss };
      return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}getEmplOpts`, options);
    }
    if (searchEmployee.identifNumber == null && searchEmployee.email != null) {
      const options = { params: queryJustEmail, headers: headerss };
      return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}getEmplOpts`,options);
    }
    if (searchEmployee.identifNumber == null && searchEmployee.email == null) {
      const options = { headers: headerss };
      return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}getEmplOpts`,options);
    }
  }

  findById(id: String): Observable<ApiResponse<EmployeeModel>> {
    return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}${id}`,this.httpOptions );
  }

  edit(id: String,employee: EmployeeModel): Observable<ApiResponse<EmployeeModel>> {
    return this.http.put<ApiResponse<EmployeeModel>>(`${this.url}${id}`,employee,this.httpOptions);
  }

  create(person: EmployeeModel, id:string): Observable<ApiResponse<EmployeeModel>> {
    return this.http.post<ApiResponse<EmployeeModel>>(`${this.url}${id}`,person,this.httpOptions);
  }


  changeStatus(id: string): Observable<ApiResponse<EmployeeModel>> {
    return this.http.put<ApiResponse<EmployeeModel>>(`${this.url}changestatus/${id}`, null, this.httpOptions);
  }



  /*
    delete(id: string): Observable<ResponseApp<Employee>> {
      return this.http.delete<ResponseApp<Employee>>(`${this.url}/${id}`);
    }*/
}
