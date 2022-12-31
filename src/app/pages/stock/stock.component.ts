import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SearchStock } from '../../models/request/searchStock';
import { EmployeeModel } from '../../models/response/EmployeeModel';
import { PersonModel } from '../../models/response/personModel';
import { StockModel } from '../../models/response/stockModel';
import { StockService } from '../../service/stock/StockService';

@Component({
  selector: 'ngx-stock',
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.scss"],
})
export class StockComponent implements OnInit {

  showSearchCard: boolean = true;
  showResultForm: boolean = false;
  showAddOrEditForm: boolean = false;
  showSmartTable: boolean = false;
  showAddForm: boolean = false;

  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();
  idEmpl: string;
  idStock: string;
  employeeResponse: PersonModel;



  constructor(
    private formBuilder: FormBuilder,
    private stockService: StockService,
    private dialogService: NbDialogService,) {
  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        collectionNumber: [""]
      }),
    });
  }

  resultForm = this.formBuilder.group({

    //Blood Collection
    collectionNumber: [""], qtdde: [""], insertionDate: [""], expirationDate: [""],

    //Donner
    nameDonner: [""], surnameDonner: [""], dmDocIdent: [""], telefone: [""],

    //Employee
    nameEmployee: [""], identifNumber: [""]
  });

  convertFormToModel() {
    var viewModelObject = <SearchStock>{
      collectionNumber: this.searchGroup.get("collectionNumber").value,
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
      insertionDate: {
        title: 'Data Inserção',
        type: 'string',
      },
      expirationDate: {
        title: 'Validade',
        type: 'string',
      },
      collectionNumber: {
        title: 'Colheita',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.collection.collectionNumber }
      },
      namePerson: {
        title: 'Doador',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.collection.idPerson.namePerson + ' ' + row.collection.idPerson.surnamePerson }
      },
      dmBloodCode: {
        title: 'G. Sanguíneo',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.collection.idPerson.dmBloodCode }
      },
      surnamePerson: {
        title: 'Funcionário',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.collection.idEmployee.identifNumber }
      },
    },
  };


  ////////        GET  with Params        ///////

  convertCollectioSearch() {
    var collectionModel = <SearchStock>{
      collectionNumber: this.searchGroup.get("collectionNumber").value,
    };
    return collectionModel;
  }

  onSearchFormSubmit() {
    this.convertCollectioSearch()
    this.showSmartTable = true
    this.stockService.findByCollectionNumber(this.convertCollectioSearch())
      .subscribe((data: any) => {
        this.source.load(data.details);
      });
  }

  clearSearchForm() {
    this.searchForm.reset();
  }


  /******** Get BY ID - Details */

  public onStockSelect($event) {
    this.showResultForm = true;
    this.showSearchCard = false;

    if ($event.data.id) {
      this.idStock = $event.data.id;

      //blood collection fields
      this.resultForm.get("collectionNumber").setValue($event.data.collection.collectionNumber);
      this.resultForm.get("qtdde").setValue($event.data.collection.qtdde);
      this.resultForm.get("insertionDate").setValue($event.data.insertionDate);
      this.resultForm.get("expirationDate").setValue($event.data.expirationDate);
      //donner fields
      this.resultForm.get("nameDonner").setValue($event.data.collection.idPerson.namePerson + " "
        + $event.data.collection.idPerson.surnamePerson);
      this.resultForm.get("dmDocIdent").setValue($event.data.collection.idPerson.dmDocIdent);
      this.resultForm.get("telefone").setValue($event.data.collection.idPerson.telefone);
      //employee fields
      this.resultForm.get("nameEmployee").setValue($event.data.collection.idEmployee.idPerson.namePerson + " "
        + $event.data.collection.idEmployee.idPerson.surnamePerson);
      this.resultForm.get("identifNumber").setValue($event.data.collection.idEmployee.identifNumber);
    }
  }


  /******** ADD  *************** */

  AddForm(){
    this.showAddForm=true;
  }

  addForm = this.formBuilder.group({
    expirationDate: [""]
  });

  addStock() {
    this.convertAddForm();
    /* this.stockService.create(this.convertAddForm(),'bbd6c39a-3c69-497c-8ca6-fab04dd51698',this.idPerson).subscribe(
      (data: any) => {
        console.log(data);
      }
    ) */

  }

  convertAddForm() {
    var viewModelObject = <StockModel>{
      collectionNumber: this.searchGroup.get("expirationDate").value,
    };
    return viewModelObject;
  }

  /************** Edit ***********/

  /* public onEdit($event) {
     this.idEmpl = $event.data.id;

     this.bloodCollectService.findById(this.idEmpl).subscribe(
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
         this.addForm.get("dmfunction").setValue($event.data.dmfunction);
         this.addForm.get("email").setValue($event.data.email);
       }
     );

     this.showAddOrEditForm = true; this.showSmartTable = false;
   }

  */

  /**************////// Change Status */

  dialogRef: NbDialogRef<any>
  @ViewChild('dialogDelete') dialogDelete: TemplateRef<any>;

  public onDelete($event) {
   /*  this.idBloodCollect = $event.data.id;
    this.dialogRef = this.dialogService.open(this.dialogDelete); */
  }

  /*public onDeleteConfirm() {
      this.bloodCollectService.changeStatus(this.idBloodCollect).subscribe(
        (data: any) => {
          console.log(data);
          this.dialogRef.close();
        }
      );

  }*/


}

