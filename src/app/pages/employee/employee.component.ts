import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { EmployeeService } from '../../service/employee/employeeService';
import { TreHelper } from '../../helpers/helper';
import { SearchEmployee } from '../../models/request/searchEmployee';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-person',
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
})
export class EmployeeComponent implements OnInit {

  showSearchCard: boolean = true;
  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();


  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        identifNumber: ["1hEeTD"],
        email: ["adilson@gmail.com"]
      }),
    });
  }

  resultForm = this.formBuilder.group({
    id: [""],name: [""], surname: [""], bloodCode: [""],
    docIdent: [""], birthday: [""], dmSex: [""],homeAdd: [""],
    jobAddress: [""], profession: [""], grade: [""], email: [""]
  });


  convertFormToModel() {
    var viewModelObject = <SearchEmployee>{
      identifNumber: this.searchGroup.get("identifNumber").value,
      email: this.searchGroup.get("email").value,
    };
    return viewModelObject;
  }

  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }

 /////    SMART TABLE     //////////

  settings = {
    noDataMessage: "Sem Dados",
    mode: 'external',
    actions: { columnTitle: 'Ações', add: false },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      //confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      namePerson: {
        title: 'Nome',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.idPerson.namePerson}
      },
      surnamePerson: {
        title: 'Apelido',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.idPerson.surnamePerson}
      },
      identifNumber: {
        title: 'Num. Identificação',
        type: 'string',
      },
      email: {
        title: 'email',
        type: 'string',
      },
    },
  };


  ////////        GET          ///////

  onSearchFormSubmit() {
    this.employeeService
        .getEmployeeMultipleParams(this.convertFormToModel())
        .subscribe((data: any) => {
        this.source.load(data.details[0]);
    });

  }


  clearSearchForm() {
    this.searchForm.reset();
  }







}


