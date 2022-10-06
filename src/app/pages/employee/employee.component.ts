import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { EmployeeService } from '../../service/employee/employeeService';
import { TreHelper } from '../../helpers/helper';
import { SearchEmployee } from '../../models/request/searchEmployee';

@Component({
  selector: 'ngx-person',
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
})
export class EmployeeComponent implements OnInit {

  showSearchCard: boolean = true;
  searchForm: FormGroup;


  constructor(//private service: SmartTableData,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        identifNumber: ["1vU30v"],
        email: [""]
      }),
    });
  }


  convertFormToModel() {
    var viewModelObject = <SearchEmployee>{
      identifNumber: this.searchGroup.get("identifNumber").value,
      email: this.searchGroup.get("email").value,
    };
    TreHelper.removeProperty(viewModelObject);
  }

  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }

  ////////        GET          ///////

  onSearchFormSubmit() {
    this.convertFormToModel();

  }







  clearSearchForm() {
    this.searchForm.reset();
  }







}


