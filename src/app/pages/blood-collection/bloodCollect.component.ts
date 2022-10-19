import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { SearchBloodCollect } from '../../models/request/searchbloodCollect';
import { SearchEmployee } from '../../models/request/searchEmployee';
import { EmployeeModel } from '../../models/response/EmployeeModel';
import { PersonModel } from '../../models/response/personModel';

import { BloodCollectService } from '../../service/blood-collection.ts/BloodCollectService';

@Component({
  selector: 'ngx-person',
  templateUrl: "./bloodCollect.component.html",
  styleUrls: ["./bloodCollect.component.scss"],
})
export class BloodCollectComponent implements OnInit {

  showSearchCard: boolean = true;
  showResultForm: boolean = false;
  showAddOrEditForm: boolean = false;
  showSmartTable: boolean = false;

  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();
  idEmpl: string;
  employeeResponse: PersonModel;



  constructor(
    private formBuilder: FormBuilder,
    private bloodCollectService: BloodCollectService) {
  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        collectionNumber: ["sd42"],
        insertionDate: [""]
      }),
    });
  }

  resultForm = this.formBuilder.group({
    id: [""], name: [""], surname: [""], bloodCode: [""], docIdent: [""], birthday: [""], dmSex: [""],
    homeAdd: [""], jobAddress: [""], profession: [""], grade: [""], email: [""],

    identifNumber: [""], dmFunction: [""],
  });

  convertFormToModel() {
    var viewModelObject = <SearchBloodCollect>{
      collectionNumber: this.searchGroup.get("collectionNumber").value,
      insertionDate: this.searchGroup.get("insertionDate").value,
    };
    return viewModelObject;
  }

  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }

  /*********** CLOSE FORMS */
  closeResult() {
    this.showSmartTable = false;
  }

  closeAddForm() {
    this.showAddOrEditForm = false;
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
        valuePrepareFunction: (cell, row) => { return row.idPerson.namePerson }
      },
      surnamePerson: {
        title: 'Apelido',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.idPerson.surnamePerson }
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

    this.showSmartTable = true
       this.bloodCollectService
      .getBloodColectMultParams(this.convertFormToModel())
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

      /* this.bloodCollectService.findById(this.idEmpl).subscribe(
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
      ); */
    }
  }


  /******** ADD  *************** */

  showAddBloodCollect() {
    this.showAddOrEditForm = true;
  }

  convertPersonData() {
    var personModelObject = <PersonModel>{
      namePerson: this.addForm.get("name").value,
      surnamePerson: this.addForm.get("surname").value,
      dmBloodCode: this.addForm.get("bloodCode").value,
      dmDocIdent: this.addForm.get("dmDocIdent").value,
      birthday: this.addForm.get("birthday").value,
      picturePerson: "picture",
      dmSex: this.addForm.get("dmSex").value,
      dmHomeAdd: this.addForm.get("homeAdd").value,
      jobAddress: this.addForm.get("jobAddress").value,
      profession: this.addForm.get("profession").value,
      grade: this.addForm.get("grade").value,
      whoInserted: "Hernani",
      whoUpdated: "Hernani",
      status: "true",
      email: this.resultForm.get("email").value,
    };
    return personModelObject;
  }

  addEmployee() {
    this.convertFormToModel();
    /* this.bloodCollectService.create(this.convertAddFormToModel()).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
    console.log(this.convertFormToModel());
 */
  }


  addForm = this.formBuilder.group({
    name: ["as"], surname: ["asd"], bloodCode: ["s"], dmDocIdent: ["asd"],
    birthday: ["2022-09-08"], dmSex: ["s"], homeAdd: ["asdf"], jobAddress: ["asf"],
    profession: ["fwrt"], grade: ["herg"],

    identNumber: ["56256"], dmFunction: ["efwe"], email: ["sdff@ds.com"],
    pw: ["zdf"]
  });


  convertAddFormToModel() {
    var viewModelObject = <EmployeeModel>{
      Person: this.convertPersonData(),
      identNumber: this.addForm.get("email").value,
      dmFunction: this.addForm.get("dmFunction").value,
      email: this.addForm.get("email").value,
    };
    return viewModelObject;
  }

  /************** Edit ***********/

  public onEdit($event) {
    this.idEmpl = $event.data.id;

    /* this.bloodCollectService.findById(this.idEmpl).subscribe(
      (data: any) => {
        console.log(data.details[0]);

        //person fields
        this.employeeResponse = data.details[0];
        this.addForm.get("name").setValue($event.data.idPerson.namePerson);
        this.addForm.get("surname").setValue($event.data.idPerson.surnamePerson);
        this.addForm.get("bloodCode").setValue($event.data.idPerson.dmBloodCode);
        this.addForm.get("dmDocIdent").setValue($event.data.idPerson.dmDocIdent);
        this.addForm.get("birthday").setValue($event.data.idPerson.birthday);
        this.addForm.get("dmSex").setValue($event.data.idPerson.dmSex);
        this.addForm.get("homeAdd").setValue($event.data.idPerson.dmHomeAdd);
        this.addForm.get("jobAddress").setValue($event.data.idPerson.jobAddress);
        this.addForm.get("profession").setValue($event.data.idPerson.profession);
        this.addForm.get("grade").setValue($event.data.idPerson.grade);
        //employee fields
        this.addForm.get("identNumber").setValue($event.data.identNumber);
        this.addForm.get("dmFunction").setValue($event.data.dmFunction);
        this.addForm.get("email").setValue($event.data.email);
      }
    ); */

    this.showAddOrEditForm = true; this.showSmartTable = false;

  }



}


