import { EmployeeModel } from '../../models/response/EmployeeModel';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { EmployeeService } from '../../service/employee/employeeService';
import { SearchEmployee } from '../../models/request/searchEmployee';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonModel } from '../../models/response/personModel';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { DonnerService } from '../../service/blood-donnner/DonnerService';
import { BloodDonner } from '../../models/request/bloodDonner';

@Component({
  selector: 'ngx-employee',
  templateUrl: "./bloodDonner.component.html",
  styleUrls: ["./bloodDonner.component.scss"],
})
export class BloodDonnerComponent implements OnInit {

  showSearchCard: boolean = true;
  showResultForm: boolean = false;
  showAddOrEditForm: boolean = false;
  showSmartTable: boolean = false;

  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();
  idEmpl: string;
  employeeResponse: PersonModel;

  dialogRef: NbDialogRef<any>
  @ViewChild('dialogDelete') dialogDelete: TemplateRef<any>;


  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private donnerService: DonnerService,
    private dialogService: NbDialogService) {

  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        identifNumber: ["hRduMN"]
      }),
    });
  }

  resultForm = this.formBuilder.group({
    id: [""], name: [""], surname: [""], bloodCode: [""], docIdent: [""], birthday: [""], dmSex: [""],
    homeAdd: [""], jobAddress: [""], profession: [""], grade: [""], email: [""],

    identifNumber: [""], dmfunction: [""],
  });

  convertFormToModel() {
    var viewModelObject = <BloodDonner>{
      identifNumber: this.searchGroup.get("identifNumber").value,
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
    this.donnerService.getDonnerBy(this.convertFormToModel()).subscribe((data: any) => {
        this.source.load(data.details[0]);
      });
    console.log("Donners");


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


  /******** ADD  *************** */

  showAddEmpl() {
    this.showAddOrEditForm = true;
    this.showSmartTable = false;
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

  addDonner() {
    this.convertFormToModel();
    this.employeeService.create(this.convertAddOrEditFormToModel()).subscribe(
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
    name: [""], surname: [""], bloodCode: [""], dmDocIdent: [""],
    birthday: [""], dmSex: [""], homeAdd: [""], jobAddress: [""],
    profession: [""], grade: [""],

    identifNumber: [""], dmfunction: [""], email: [""],
    pw: [""]
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
        this.addOrEditForm.get("dmfunction").setValue($event.data.dmfunction);
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
