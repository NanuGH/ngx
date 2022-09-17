import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { TreHelper } from '../../helpers/helper';
import { PersonModel } from '../../models/personModel';
import { SearchPerson } from '../../models/searchPerson';
import { PersonService } from '../../service/person/personService';


@Component({
  selector: 'ngx-person',
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit{

  searchForm: FormGroup;
  resultForm: FormGroup;
  showResultList:boolean=false;
  disableFormSearch:boolean=true;
  showSmarttableList: boolean =false;

  personResponse:PersonModel;

  source: LocalDataSource = new LocalDataSource();

  constructor(//private service: SmartTableData,
             private formBuilder: FormBuilder,
             private personService: PersonService) {
    //const data = this.service.getData();
    //this.source.load(data);
  }

  ngOnInit(): void {
    this.loadSearchForm();
  }


  searchResult(event) {
    this.source.load(event);
  }


    settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
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
    this.showResultList=false;
  }

  loadSearchForm() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        namePerson: [""],
        surnamePerson: [""],
      }),
    });

    this.resultForm = this.formBuilder.group({
      name:[""],
      surname:[""]
    })
  }


  onSearchFormSubmit() {
    this.convertFormToModel();
  }

  searchPersonService(viewModelObject: SearchPerson) {
    this.personService
      .getPersonMultipleParams(viewModelObject)
      .subscribe((data: any) => {
        this.source.load(data.details[0]);
        console.log(this.source);
        this.showSmarttableList=true;
      });

  }

  convertFormToModel() {
    var viewModelObject = <SearchPerson>{
      namePerson: this.searchGroup.get("namePerson").value,
      surnamePerson: this.searchGroup.get("surnamePerson").value,
    };
    TreHelper.removeProperty(viewModelObject);

    console.log(viewModelObject);

    this.searchPersonService(viewModelObject);
  }

  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }

  /******** Get BY ID - Details */

  public setResultForm(){
    this.resultForm.get("name").setValue(this.personResponse.namePerson);
    this.resultForm.get("surname").setValue(this.personResponse.surnamePerson);
  }

  public onPersonIdSelect($event) {

    if ($event.data.id) {
      let idPerson = $event.data.id;
      this.personService.findById(idPerson).subscribe(
        (data: any) => {
          this.personResponse = data.details[0];
          this.showResultList=true;
          this.disableFormSearch=false;
          this.setResultForm();
        }
      );
    }
  }


  /**////////////////// ADD Person */

  public addPerson(){
    this.disableFormSearch=true;
  }
}
