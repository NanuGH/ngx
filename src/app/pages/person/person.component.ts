import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { SearchPerson } from '../../models/request/searchPerson';
import { PersonModel } from '../../models/response/personModel';
import { PersonService } from '../../service/person/personService';

@Component({
  selector: 'ngx-person',
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit {

  idPerson:string;
  searchForm: FormGroup;
  //resultForm: FormGroup;
  //details: FormGroup;

  showResultList: boolean = false;
  disableFormSearch: boolean = false;
  showSmarttableList: boolean = false;
  Searchtable: boolean = true;

  personResponse: PersonModel;
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
        birthday: ["2022-09-17"]
      }),
    });
  }

  resultForm = this.formBuilder.group({
    id: [""],name: [""], surname: [""], bloodCode: [""],
    docIdent: [""], birthday: [""], dmSex: [""],homeAdd: [""],
    jobAddress: [""], profession: [""], grade: [""], email: [""]
  });



  searchResult(event) {
    this.source.load(event);
  }


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

  cleanForm() {
    this.searchForm.reset();
    this.showSmarttableList = false;
  }

  closeResult() {
    this.disableFormSearch = true;
    this.showSmarttableList = false;
  }


  searchPersonService(viewModelObject: SearchPerson) {
    this.personService
      .getPersonMultipleParams(viewModelObject)
      .subscribe((data: any) => {
        this.source.load(data.details[0]);
        this.showSmarttableList = true;
      });

  }


  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }

  public receiveDataForm(searchPerson: SearchPerson) {
    this.searchPersonService(searchPerson);
  }

  /******** Get BY ID - Details */

  public onPersonIdSelect($event) {

    this.Searchtable = false;
    this.showSmarttableList = false;

    if ($event.data.id) {
      this.idPerson = $event.data.id;
      console.log($event.data);


      this.personService.findById(this.idPerson).subscribe(
        (data: any) => {
          console.log(data.details[0]);
          this.personResponse = data.details[0];
          this.resultForm.get("name").setValue($event.data.namePerson);
          this.resultForm.get("surname").setValue($event.data.surnamePerson);
          this.resultForm.get("bloodCode").setValue($event.data.dmBloodCode);
          this.resultForm.get("docIdent").setValue($event.data.dmDocIdent);
          this.resultForm.get("birthday").setValue($event.data.birthday);
          this.resultForm.get("dmSex").setValue($event.data.dmSex);
          this.resultForm.get("homeAdd").setValue($event.data.dmHomeAdd);
          this.resultForm.get("jobAddress").setValue($event.data.jobAddress);
          this.resultForm.get("profession").setValue($event.data.profession);
          this.resultForm.get("grade").setValue($event.data.grade);
          this.resultForm.get("email").setValue($event.data.email);

          this.showResultList = true;
          this.disableFormSearch = false;
        }
      );
    }


  }

  closeDetails() {
    this.resultForm.reset();
    this.showResultList = false;
    this.Searchtable = true;
    this.showSmarttableList = false;
  }

  /**////////////////// ADD Person */

  showAddPerson() {
    this.showResultList = true;
  }

  public addPerson() {
    this.convertFormToModel();
    this.personService.create(this.convertFormToModel()).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }

  convertFormToModel() {
    var viewModelObject = <PersonModel>{
      namePerson: this.resultForm.get("name").value,
      surnamePerson: this.resultForm.get("surname").value,
      dmBloodCode: this.resultForm.get("bloodCode").value,
      dmDocIdent: this.resultForm.get("docIdent").value,
      birthday: this.resultForm.get("birthday").value,
      picturePerson: "picture",
      dmSex: this.resultForm.get("dmSex").value,
      dmHomeAdd: this.resultForm.get("homeAdd").value,
      jobAddress: this.resultForm.get("jobAddress").value,
      profession: this.resultForm.get("profession").value,
      grade: this.resultForm.get("grade").value,
      whoInserted: "Hernani",
      whoUpdated: "Hernani",
      status: "true",
      email: this.resultForm.get("email").value,
    };
    //console.log(viewModelObject);
    return viewModelObject;

  }

  /**************////// Edit */
  public onEdit($event) {
/*     const personModel = <PersonModel>{
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
    this.personService.edit(idPerson, personModel).subscribe(
      (data: any) => {
        $event.confirm.resolve();
        console.log(data);
      }
    );*/

    this.showResultList=true; this.Searchtable=false;
    this.idPerson = $event.data.id;

    if (this.idPerson) {
          this.resultForm.get("name").setValue($event.data.namePerson);
          this.resultForm.get("surname").setValue($event.data.surnamePerson);
          this.resultForm.get("bloodCode").setValue($event.data.dmBloodCode);
          this.resultForm.get("docIdent").setValue($event.data.dmDocIdent);
          this.resultForm.get("birthday").setValue($event.data.birthday);
          this.resultForm.get("dmSex").setValue($event.data.dmSex);
          this.resultForm.get("homeAdd").setValue($event.data.dmHomeAdd);
          this.resultForm.get("jobAddress").setValue($event.data.jobAddress);
          this.resultForm.get("profession").setValue($event.data.profession);
          this.resultForm.get("grade").setValue($event.data.grade);
          this.resultForm.get("email").setValue($event.data.email);

          this.showResultList = true; this.disableFormSearch = false;
    }
  }

  public editPerson(){
    this.showResultList = true; this.disableFormSearch = false;
    this.convertFormToModel();
    console.log(this.convertFormToModel());


   /* this.personService.edit(this.convertFormToModel()).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
 */
  }

}


