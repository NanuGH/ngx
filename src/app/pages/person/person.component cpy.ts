import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonModel } from '../../models/personModel';
import { SearchPerson } from '../../models/searchPerson';
import { PersonService } from '../../service/person/personService';
import { SearchComponent } from '../reusable/searchPerson/search.component';
import { SmartTableComponent } from '../tables/smart-table/smart-table.component';

@Component({
  selector: 'ngx-person',
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit{

  searchForm: FormGroup;
  //resultForm: FormGroup;
  showResultList:boolean=true;
  disableFormSearch:boolean=false;
  showSmarttableList: boolean =false;
  Searchtable:boolean=true;

  personResponse:PersonModel;
  source: LocalDataSource = new LocalDataSource();
  sourcePersonDtls: LocalDataSource = new LocalDataSource();

  constructor(//private service: SmartTableData,
             private formBuilder: FormBuilder,
             private personService: PersonService) {
    //const data = this.service.getData();
    //this.source.load(data);
  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        namePerson: [""],
        surnamePerson: [""],
        birthday: ["2022-09-08"]
      }),
    });


  }

  resultForm = this.formBuilder.group({
    details: this.formBuilder.group({
     name:[""],surname:[""],bloodCode:[""],docIdent:[""],birthday:[""],dmSex:[""],
     homeAdd:[""],jobAddress:[""],profession:[""],grade:[""],email:[""]
    }),
  });


  searchResult(event) {
    this.source.load(event);
  }


    settings = {
      noDataMessage: "Sem Dados",
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
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: {
        namePerson: {
          title: 'Nome',
          type: 'string',
        },
        surnamePerson: {
          title: 'Apelido',
          type: 'string',
        },
        dmBloodCode: {
          title: 'Tipo Sanguineo',
          type: 'string',
        },
        dmSex: {
          title: 'Sexo',
          type: 'string',
        },
      },
    };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  /*************************/////// */

  cleanForm(){
    this.searchForm.reset();
    this.showSmarttableList=false;
  }

  closeResult(){
    this.disableFormSearch=true;
    this.showSmarttableList=false;
  }


  searchPersonService(viewModelObject: SearchPerson) {
    this.personService
      .getPersonMultipleParams(viewModelObject)
      .subscribe((data: any) => {
        this.source.load(data.details[0]);
        this.showSmarttableList=true;
      });

  }


  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }

  public receiveDataForm(searchPerson:SearchPerson ){
    this.searchPersonService(searchPerson);
  }

  /******** Get BY ID - Details */

  public setResultForm(){
    this.resultForm.get("name").setValue(this.personResponse.namePerson);
    this.resultForm.get("surname").setValue(this.personResponse.surnamePerson);
    this.resultForm.get("bloodCode").setValue(this.personResponse.dmBloodCode);
    this.resultForm.get("docIdent").setValue(this.personResponse.dmDocIdent);
    this.resultForm.get("birthday").setValue(this.personResponse.birthday);
    this.resultForm.get("dmSex").setValue(this.personResponse.dmSex);
    this.resultForm.get("homeAdd").setValue(this.personResponse.dmHomeAdd);
    this.resultForm.get("jobAddress").setValue(this.personResponse.jobAddress);
    this.resultForm.get("profession").setValue(this.personResponse.profession);
    this.resultForm.get("grade").setValue(this.personResponse.grade);
    this.resultForm.get("email").setValue(this.personResponse.email);
    console.log(this.resultForm.value);
  }

  public onPersonIdSelect($event) {

    this.Searchtable=false;
    this.showSmarttableList=false;

    if ($event.data.id) {
      let idPerson = $event.data.id;
      console.log(idPerson);

      this.personService.findById(idPerson).subscribe(
        (data: any) => {
          console.log(data.details[0]);
          this.personResponse = data.details[0];
          this.setResultForm();

          this.showResultList=true;
          this.disableFormSearch=false;
        }
      );
    }


  }

  closeDetails(){
    this.resultForm.reset();
    this.showResultList=false;
    this.Searchtable=true;
    this.showSmarttableList=true;
  }

  /**////////////////// ADD Person */

  showAddPerson(){
    this.showResultList=true;
  }

  public addPerson(){
    this.convertFormToModel();
    this.personService.create(this.convertFormToModel()).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }

  convertFormToModel() {
    var viewModelObject = <PersonModel>{
      namePerson: this.searchGroup.get("name").value,
      surnamePerson: this.searchGroup.get("surname").value,
      dmBloodCode: this.searchGroup.get("bloodCode").value,
      dmDocIdent: this.searchGroup.get("docIdent").value,
      birthday: this.searchGroup.get("birthday").value,
      picturePerson: "picture",
      dmSex: this.searchGroup.get("dmSex").value,
      dmHomeAdd: this.searchGroup.get("homeAdd").value,
      jobAddress: this.searchGroup.get("jobAddress").value,
      profession: this.searchGroup.get("profssion").value,
      grade: this.searchGroup.get("grade").value,
      whoInserted: "Hernani",
      whoUpdated: "Hernani",
      status: "true",
      email: this.searchGroup.get("email").value,
      };
      console.log(viewModelObject);
    return viewModelObject;

  }

  /**************////// Edit */
  onEdit($event){
    const personModel = <PersonModel>{
      namePerson: $event.newData.namePerson,
      surnamePerson: $event.newData.surnamePerson,
      dmBloodCode: $event.newData.dmBloodCode,
      dmDocIdent: $event.newData.dmDocIdent,

      birthday: $event.newData.birthday,
      picturePerson: $event.newData.picturePerson,
      dmSex: $event.newData.dmSex,
      dmHomeAdd: $event.newData.dmHomeAdd,

      jobAddress: $event.newData.jobAddress,
      profession: $event.newData.profession,
      grade: $event.newData.grade,
      whoInserted: $event.newData.whoInserted,

      whoUpdated: $event.newData.whoUpdated,
      status: $event.newData.status,
      email: $event.newData.email,
    }
    let idPerson = $event.data.id;
    this.personService.edit(idPerson,personModel).subscribe(
      (data: any) => {
        $event.confirm.resolve();
        console.log(data);
      }
    );
  }
}
