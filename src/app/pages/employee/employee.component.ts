import { EmployeeModel } from './../../models/response/EmployeeModel';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { EmployeeService } from '../../service/employee/employeeService';
import { SearchEmployee } from '../../models/request/searchEmployee';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonModel } from '../../models/response/personModel';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { RolesService } from '../../service/role/rolesService';
import { SearchRole } from '../../models/request/searchRole';
import { RolesModel } from '../../models/response/RolesModel';

@Component({
  selector: 'ngx-employee',
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
})
export class EmployeeComponent implements OnInit {

  showSearchCard: boolean = true;
  showResultForm: boolean = false;
  showAddOrEditForm: boolean = false;
  showSmartTable: boolean = false;
  showrolesTable: boolean = false;

  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();
  sourceRoles: LocalDataSource = new LocalDataSource();
  idEmpl: string;
  idRole: string;
  employeeResponse: PersonModel;
  roleResponse: RolesModel;

  dialogRef: NbDialogRef<any>
  @ViewChild('dialogDelete') dialogDelete: TemplateRef<any>;


  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private rolesService: RolesService,
    private dialogService: NbDialogService) {

  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        identifNumber: ["9ZpvEG"],
        email: ["ady@gmail.com"]
      }),
    });
  }

  resultForm = this.formBuilder.group({
    id: [""], name: [""], surname: [""], bloodCode: [""], docIdent: [""], birthday: [""], dmSex: [""],
    homeAdd: [""], jobAddress: [""], profession: [""], grade: [""], email: [""],

    identifNumber: [""], dmfunction: [""],
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

  /*********** CLOSE FORMS */
  closeResult() {
    this.showSmartTable = false;
    this.resultForm.reset();
  }

  closeAddForm() {
    this.showAddOrEditForm = false;
    this.addOrEditForm.reset();
  }

  closeDetails() {
    this.showResultForm = false;
    this.showSearchCard = true;
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
        valuePrepareFunction: (cell, row) => {
          return row.idPerson.namePerson + ' ' + row.idPerson.surnamePerson}
      },
      dmfunction: {
        title: 'Função',
        type: 'string',
      },
      identifNumber: {
        title: 'Nº Identificação',
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

    this.showSmartTable = true

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
    this.showResultForm = true;
    this.showSearchCard = false;

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
          this.resultForm.get("dmfunction").setValue($event.data.dmfunction);
          this.resultForm.get("email").setValue($event.data.email);

        }
      );
    }
  }

    /******** GET ROLES  *************** */

  @ViewChild('dialogRoles') dialogPerson: TemplateRef<any>;

  settingsRoles = {
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
      name: {
        title: 'Nome',
        type: 'string',
      },
      code: {
        title: 'Codigo',
        type: 'string',
      },

    },
  };

  valueToSearch: string;
  searchRole(){
    this.valueToSearch = this.addOrEditForm.get("dmfunction").value;
    this.showrolesTable = true;
    this.showSearchCard=false;
    this.dialogRef = this.dialogService.open(this.dialogPerson);
    /* this.rolesService.findByRoleName(this.valueToSearch).subscribe(
      (data:any)=>{
        this.sourceRoles = data.details;
      }
    ); */
    this.rolesService.findAllRole().subscribe(
      (data:any)=>{
        this.sourceRoles = data.details[0];
      }
    );

  }

  closeRolesTable(){
    this.showrolesTable = false;
    this.showSearchCard=true;
    this.dialogRef.close();
  }

  onRoleSelect($event){
    if ($event.data.id) {
      this.idRole = $event.data.id;
      this.roleResponse = $event.data;
      this.addOrEditForm.get("dmfunction").setValue(this.roleResponse.name);

    }
    console.log(this.idRole);

    this.dialogRef.close();
  }


  /******** ADD  *************** */

  showAddEmpl() {
    this.showAddOrEditForm = true;
    this.showSmartTable = false;
    this.addOrEditForm = this.formBuilder.group({
      name: ["Adilson"], surname: ["Correia"], bloodCode: ["A+"], dmDocIdent: ["cni1542"],
      birthday: ["1991-04-16"], dmSex: ["M"], homeAdd: ["Palmarejo"], jobAddress: ["Plato"],
      profession: ["E. Informático"], grade: ["Mestrado"],
      //
      identifNumber: ["cd458"], dmfunction: [""], email: ["ady@gmail.com"],pw: ["125juy"]
    });
  }

  convertPersonData() {
    var personModelObject = <PersonModel>{
      namePerson: this.addOrEditForm.get("name").value,
      surnamePerson: this.addOrEditForm.get("surname").value,
      dmBloodCode: this.addOrEditForm.get("bloodCode").value,
      dmDocIdent: this.addOrEditForm.get("dmDocIdent").value,
      birthday: this.addOrEditForm.get("birthday").value,
      picturePerson: "picture",
      dmSex: this.addOrEditForm.get("dmSex").value,
      dmHomeAdd: this.addOrEditForm.get("homeAdd").value,
      jobAddress: this.addOrEditForm.get("jobAddress").value,
      profession: this.addOrEditForm.get("profession").value,
      grade: this.addOrEditForm.get("grade").value,
      whoInserted: "Hernani",
      whoUpdated: "Hernani",
      status: "true",
      email: this.addOrEditForm.get("email").value,
    };
    return personModelObject;
  }

  addEmployee() {
    this.convertFormToModel();
    this.employeeService.create(this.convertAddOrEditFormToModel(),this.idRole).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
    console.log(this.convertFormToModel());

  }

 /*  addForm = this.formBuilder.group({
    name: ["as"], surname: ["asd"], bloodCode: ["s"], dmDocIdent: ["asd"],
    birthday: ["2022-09-08"], dmSex: ["s"], homeAdd: ["asdf"], jobAddress: ["asf"],
    profession: ["fwrt"], grade: ["herg"],

    identNumber: ["56256"], dmFunction: ["efwe"], email: ["sdff@ds.com"],
    pw: ["zdf"]
  }); */

  addOrEditForm = this.formBuilder.group({
    name: ["Adilson"], surname: ["Correia"], bloodCode: ["A+"], dmDocIdent: ["cni1542"],
    birthday: ["1991-04-16"], dmSex: ["M"], homeAdd: ["Palmarejo"], jobAddress: ["Plato"],
    profession: ["E. Informático"], grade: ["Mestrado"],
    //
    identifNumber: ["cd458"], dmfunction: [""], email: ["ady@gmail.com"],pw: ["125juy"]
  });

  convertAddOrEditFormToModel() {
    var viewModelObject = <EmployeeModel>{
      Person: this.convertPersonData(),
      identifNumber: this.addOrEditForm.get("identifNumber").value,
      dmfunction: this.addOrEditForm.get("dmfunction").value,
      email: this.addOrEditForm.get("email").value,
      pw: this.addOrEditForm.get("pw").value,
      whoUpdated: "Hernani"
    };
    return viewModelObject;
  }

  /************** Edit ***********/

  public onEdit($event) {
    this.idEmpl = $event.data.id;

    this.employeeService.findById(this.idEmpl).subscribe(
      (data: any) => {
        console.log(data.details[0]);

        //person fields
        this.employeeResponse = data.details[0];
        this.addOrEditForm.get("name").setValue($event.data.idPerson.namePerson);
        this.addOrEditForm.get("surname").setValue($event.data.idPerson.surnamePerson);
        this.addOrEditForm.get("bloodCode").setValue($event.data.idPerson.dmBloodCode);
        this.addOrEditForm.get("dmDocIdent").setValue($event.data.idPerson.dmDocIdent);
        this.addOrEditForm.get("birthday").setValue($event.data.idPerson.birthday);
        this.addOrEditForm.get("dmSex").setValue($event.data.idPerson.dmSex);
        this.addOrEditForm.get("homeAdd").setValue($event.data.idPerson.dmHomeAdd);
        this.addOrEditForm.get("jobAddress").setValue($event.data.idPerson.jobAddress);
        this.addOrEditForm.get("profession").setValue($event.data.idPerson.profession);
        this.addOrEditForm.get("grade").setValue($event.data.idPerson.grade);
        //employee fields
        this.addOrEditForm.get("identifNumber").setValue($event.data.identifNumber);
        this.addOrEditForm.get("namerole").setValue($event.data.name);
        this.addOrEditForm.get("email").setValue($event.data.email);
        this.addOrEditForm.get("pw").setValue($event.data.pw);
      }
    );

    this.showAddOrEditForm = true;
    this.showSmartTable = false;
  }

  editEmployee() {
    this.convertAddOrEditFormToModel();
    this.employeeService.edit(this.idEmpl, this.convertAddOrEditFormToModel()).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
    console.log(this.convertAddOrEditFormToModel());

  }

  /**************////// Change Status */
  public onDelete($event) {
    this.idEmpl = $event.data.id;
    this.dialogRef = this.dialogService.open(this.dialogDelete);
  }

 public onDeleteConfirm() {

      this.employeeService.changeStatus(this.idEmpl).subscribe(
        (data: any) => {
          console.log(data);
          this.dialogRef.close();
        }
      );

  }


}
