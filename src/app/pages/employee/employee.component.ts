import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { EmployeeService } from '../../service/employee/employeeService';
import { TreHelper } from '../../helpers/helper';
import { SearchEmployee } from '../../models/request/searchEmployee';
import { LocalDataSource } from 'ng2-smart-table';
import { EmployeeModel } from '../../models/response/EmployeeModel';

@Component({
  selector: 'ngx-person',
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
})
export class EmployeeComponent implements OnInit {

  showSearchCard: boolean = true;
  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();
  idEmpl: string;
  employeeResponse: EmployeeModel;


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
        identifNumber: ["1vU30v"],
        email: ["aff@edfaf.com"]
      }),
    });
  }

  resultForm = this.formBuilder.group({
    id: [""],name: [""], surname: [""], bloodCode: [""],docIdent: [""], birthday: [""], dmSex: [""],
    homeAdd: [""],jobAddress: [""], profession: [""], grade: [""], email: [""],

    identifNumber: [""], dmFunction: [""],
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


  ////////        GET  with Params        ///////

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


  /******** Get BY ID - Details */

  public onEmploIdSelect($event) {

    if ($event.data.id) {
      this.idEmpl = $event.data.id;

      this.employeeService.findById(this.idEmpl).subscribe(
        (data: any) => {
          console.log(data.details[0]);

          //person fields
          this.employeeResponse = data.details[0];
          this.resultForm.get("name").setValue($event.data.idPerson.namePerson);
          this.resultForm.get("surname").setValue($event.data.idPerson.surnamePerson);
          this.resultForm.get("bloodCode").setValue($event.data.idPerson.dmBloodCode);
          this.resultForm.get("docIdent").setValue($event.data.idPerson.dmDocIdent);
          this.resultForm.get("birthday").setValue($event.data.idPerson.birthday);
          this.resultForm.get("dmSex").setValue($event.data.idPerson.dmSex);
          this.resultForm.get("homeAdd").setValue($event.data.idPerson.dmHomeAdd);
          this.resultForm.get("jobAddress").setValue($event.data.idPerson.jobAddress);
          this.resultForm.get("profession").setValue($event.data.idPerson.profession);
          this.resultForm.get("grade").setValue($event.data.idPerson.grade);
          //employee fields
          this.resultForm.get("identifNumber").setValue($event.data.identifNumber);
          this.resultForm.get("dmFunction").setValue($event.data.dmFunction);
          this.resultForm.get("email").setValue($event.data.email);

        }
      );
    }
  }







}


