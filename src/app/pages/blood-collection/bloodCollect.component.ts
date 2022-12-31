import { PersonService } from './../../service/person/personService';
import { BloodCollectModel } from './../../models/response/BloodCollectModel';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SearchBloodCollect } from '../../models/request/searchbloodCollect';
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
  showEditForm: boolean = false;
  showAddForm: boolean = false;
  showSmartTable: boolean = false;
  showdonnerTable:boolean = false;

  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();
  sourcePerson: LocalDataSource = new LocalDataSource();
  idEmpl: string;
  idBloodCollect: string;
  idPerson: string;
  idCollection: string;
  personResponse: PersonModel;
  refreshTable: BloodCollectModel;


  constructor(
    private formBuilder: FormBuilder,
    private bloodCollectService: BloodCollectService,
    private personService: PersonService,
    private dialogService: NbDialogService,) {
  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        collectionNumber: ["524f"],
        insertionDate: ["2022-11-07"]
      }),
    });
  }

  resultForm = this.formBuilder.group({

    //Donner
    id: [""], nameDonner: [""], surnameDonner: [""], bloodCode: [""], dmDocIdent: [""], birthday: [""], dmSex: [""],
    homeAdd: [""], jobAddress: [""], profession: [""], grade: [""], email: [""],

    //Blood Collection
    identifNumber: [""], dmfunction: [""],

    //Employee
    collectionNumber:[""],qtdde:[""],externCollection:[""], nameEmployee: [""],surnameEmployee: [""],
  });


  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }

  /*********** CLOSE FORMS */
  closeResult() {
    this.showSmartTable = false;
  }

  closeEditForm() {
    this.showEditForm = false;
  }

  closeDetails() {
    this.showResultForm = false;
    this.showSearchCard = true;
  }

  closeAddForm() {
    this.showAddForm = false;
    this.addForm.reset();
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
        title: 'Doador',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.idPerson.namePerson + ' ' + row.idPerson.surnamePerson}
      },
      surnamePerson: {
        title: 'Funcionário',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.idEmployee.identifNumber }
      },
      dmBloodCode: {
        title: 'G. Sanguíneo',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.idPerson.dmBloodCode }
      },
      collectionNumber: {
        title: 'Colheita',
        type: 'string',
      },
      insertionDate: {
        title: 'Data',
        type: 'string',
      },
    },
  };

  ////////        GET  with Params        ///////

  convertFormToModel() {
    var viewModelObject = <SearchBloodCollect>{
      collectionNumber: this.searchGroup.get("collectionNumber").value,
      insertionDate: this.searchGroup.get("insertionDate").value,
    };
    return viewModelObject;
  }

  onSearchFormSubmit() {
    this.showSmartTable = true
      this.bloodCollectService.getBloodColectMultParams(this.convertFormToModel())
       .subscribe((data: any) => {
        var filtroStatus = data.details[0].filter(
          function (pesquisa) {
            var list = String(pesquisa.status)
            return list == "true";
          }
        );
        this.source.load(filtroStatus);
       //this.source.load(data.details[0]);
       });
      this.showAddForm = false;
  }

  clearSearchForm() {
    this.searchForm.reset();
  }

  /******** Get BY ID - Details */

  public onEmploIdSelect($event) {
    this.showResultForm = true;
    this.showSearchCard = false;

    if ($event.data.id) {
      this.idBloodCollect = $event.data.id;

       this.bloodCollectService.findById(this.idBloodCollect).subscribe(
        (data: any) => {

          this.personResponse = data.details[0];

          //blood collection fields
          this.resultForm.get("collectionNumber").setValue($event.data.collectionNumber);
          this.resultForm.get("qtdde").setValue($event.data.qtdde);
          this.resultForm.get("externCollection").setValue($event.data.externCollection);
          //donner fields
          this.resultForm.get("nameDonner").setValue($event.data.idPerson.namePerson + " "
                                             + $event.data.idPerson.surnamePerson);
          this.resultForm.get("dmDocIdent").setValue($event.data.idPerson.dmDocIdent);
          this.resultForm.get("email").setValue($event.data.idPerson.email);
          //employee fields
          this.resultForm.get("nameEmployee").setValue($event.data.idEmployee.idPerson.namePerson + " "
                                             + $event.data.idEmployee.idPerson.surnamePerson);
          this.resultForm.get("identifNumber").setValue($event.data.idEmployee.identifNumber);
          this.resultForm.get("dmfunction").setValue($event.data.idEmployee.dmfunction);

        }
      );
    }
  }

  /******** ADD  *************** */
  showAddBloodCollect() {
    this.showAddForm = true;
    this.showSmartTable = false;
  }


  addForm = this.formBuilder.group({
    collectionNumber: [""] , qtdde: [""], externCollection: [""], value:[""]
  })

  convertAddFormToModel() {
    var viewModelObject = <BloodCollectModel>{
      collectionNumber: this.addForm.get("collectionNumber").value,
      qtdde: this.addForm.get("qtdde").value,
      externCollection: this.addForm.get("externCollection").value,
    };
    return viewModelObject;
  }


  onPersonSelect($event){
    if ($event.data.id) {
      this.idPerson = $event.data.id;
      this.personResponse = $event.data;
      this.addForm.get("value").setValue(this.personResponse.namePerson + " " + this.personResponse.surnamePerson) ;
      this.addForm.get("collectionNumber").setValue($event.data.collectionNumber);
      this.addForm.get("qtdde").setValue($event.data.qtdde);
      this.addForm.get("externCollection").setValue($event.data.externCollection);
    }
    this.dialogRef.close();
  }


  addCollect() {
    console.log(this.idPerson);

    this.convertFormToModel();
     this.bloodCollectService.create(this.convertAddFormToModel(),'bbd6c39a-3c69-497c-8ca6-fab04dd51698',this.idPerson).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }



  /************** Edit ***********/

  editForm = this.formBuilder.group({
    collectionNumber: ["as"], qtdde: ["asd"], externCollection: ["s"]
  });

  convertEditFormToModel() {
    var viewModelObject = <BloodCollectModel>{
      collectionNumber: this.editForm.get("collectionNumber").value,
      qtdde: this.editForm.get("qtdde").value,
      externCollection: this.editForm.get("externCollection").value,
    };
    return viewModelObject;
  }

  public onEdit($event) {
        this.idCollection = $event.data.id;
        this.editForm.get("collectionNumber").setValue($event.data.collectionNumber);
        this.editForm.get("qtdde").setValue($event.data.qtdde);
        this.editForm.get("externCollection").setValue($event.data.externCollection);

    this.showEditForm = true; this.showSmartTable = false;
  }

  editCollect() {

    this.convertEditFormToModel();
     this.bloodCollectService.edit(this.convertEditFormToModel(),
     this.idCollection,'bbd6c39a-3c69-497c-8ca6-fab04dd51698').subscribe(
      (data: any) => {
        console.log(data);
      }
    )
    this.showEditForm = false;
    this.showSmartTable = true;
  }

  /************** Change Status (DELETE) ******/

  dialogRef: NbDialogRef<any>
  @ViewChild('dialogDelete') dialogDelete: TemplateRef<any>;

  public onDelete($event) {
    this.idBloodCollect = $event.data.id;
    this.refreshTable = $event.data;
    this.dialogRef = this.dialogService.open(this.dialogDelete);
  }

  public onDeleteConfirm() {
      this.bloodCollectService.changeStatus(this.idBloodCollect).subscribe(
        (data: any) => {
          this.dialogRef.close();
          this.source.remove(this.refreshTable);
        }
      );

  }


  /******************    GET PERSON ********/

  @ViewChild('dialogPerson') dialogPerson: TemplateRef<any>;

  settingsDonner = {
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
        title: 'G. Sanguíneo',
        type: 'string',
      },
      dmDocIdent: {
        title: 'Doc. Ident.',
        type: 'string',
      },
    },
  };

  valueToSearch:string;
  searchDonner() {
    this.valueToSearch = this.addForm.get("value").value;
    this.showdonnerTable = true;
    this.showSearchCard=false;
    this.dialogRef = this.dialogService.open(this.dialogPerson);
    this.personService.getByOne(this.valueToSearch).subscribe(
      (data:any)=>{
        this.sourcePerson = data.details;
      }
    );
  }

  closeDonnerTable(){
    this.showdonnerTable = false;
    this.showSearchCard=true;
    this.dialogRef.close();
  }


}


