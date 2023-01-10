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

  /* getEmployeeMultipleParams(searchEmployee: SearchEmployee): Observable<ApiResponse<EmployeeModel>> {
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
  } */

  findByOpts(employee: SearchEmployee): Observable<ApiResponse<EmployeeModel>> {
    if (employee.namePerson == undefined && employee.identifNumber != undefined && employee.email != undefined) {
      return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}search?identifNumber=${employee.identifNumber}&email=${employee.email}`,
        this.httpOptions);
    }

    if (employee.identifNumber == undefined && employee.email != undefined && employee.namePerson != undefined) {
      return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}search?namePerson=${employee.namePerson}&email=${employee.email}`,
        this.httpOptions);
    }

    if (employee.email == undefined && employee.identifNumber != undefined && employee.namePerson != undefined) {
      return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}search?identifNumber=${employee.identifNumber}&namePerson=${employee.namePerson}`,
        this.httpOptions);
    }

    /* condição de dois elemento é null* */
    if (employee.namePerson != undefined && employee.identifNumber == undefined && employee.email == undefined) {
      return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}search?namePerson=${employee.namePerson}`,
        this.httpOptions);
    }

    if (employee.identifNumber != undefined && employee.email == undefined && employee.namePerson == undefined) {
      return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}search?identifNumber=${employee.identifNumber}`,
        this.httpOptions);
    }

    if (employee.email != undefined && employee.identifNumber == undefined && employee.namePerson == undefined) {
      return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}search?email=${employee.email}`,
        this.httpOptions);
    }

    return this.http.get<ApiResponse<EmployeeModel>>(`${this.url}search?identifNumber=${employee.identifNumber}&namePerson=${employee.namePerson}&email=${employee.email}`,
      this.httpOptions);

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

  resetPw(email: string,password: string): Observable<ApiResponse<EmployeeModel>> {
    return this.http.put<ApiResponse<EmployeeModel>>(`${this.url}reset/${email}/${password}`,null, this.httpOptions);
  }

}
