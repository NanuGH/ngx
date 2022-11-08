import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SearchStock } from '../../models/request/searchStock';
import { EmployeeModel } from '../../models/response/EmployeeModel';
import { PersonModel } from '../../models/response/personModel';
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

  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();
  idEmpl: string;
  idBloodCollect: string;
  isStock: string;
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

    //Donner
    id: [""], nameDonner: [""], surnameDonner: [""], bloodCode: [""], dmDocIdent: [""], birthday: [""], dmSex: [""],
    homeAdd: [""], jobAddress: [""], profession: [""], grade: [""], email: [""],

    //Blood Collection
    identifNumber: [""], dmfunction: [""],

    //Employee
    collectionNumber:[""],qtdde:[""],externCollection:[""], nameEmployee: [""],surnameEmployee: [""],
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

  onSearchFormSubmit() {
    this.showSmartTable = true
       this.stockService.findById("27f871b0-9adc-4863-b052-9cfdd66c4363")
      .subscribe((data: any) => {
        this.source.load(data.details[0]);
      });
  }

  clearSearchForm() {
    this.searchForm.reset();
  }


  /******** Get BY ID - Details */

 /* public onEmploIdSelect($event) {
    this.showResultForm = true;
    this.showSearchCard = false;

    if ($event.data.id) {
      this.idBloodCollect = $event.data.id;

       this.bloodCollectService.findById(this.idBloodCollect).subscribe(
        (data: any) => {

          this.employeeResponse = data.details[0];

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
*/

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
  }


  addForm = this.formBuilder.group({
    name: ["as"], surname: ["asd"], bloodCode: ["s"], dmDocIdent: ["asd"],
    birthday: ["2022-09-08"], dmSex: ["s"], homeAdd: ["asdf"], jobAddress: ["asf"],
    profession: ["fwrt"], grade: ["herg"],

    identNumber: ["56256"], dmfunction: ["efwe"], email: ["sdff@ds.com"],
    pw: ["zdf"]
  });


  convertAddFormToModel() {
    var viewModelObject = <EmployeeModel>{
      Person: this.convertPersonData(),
      identifNumber: this.addForm.get("email").value,
      dmfunction: this.addForm.get("dmfunction").value,
      email: this.addForm.get("email").value,
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
    this.idBloodCollect = $event.data.id;
    this.dialogRef = this.dialogService.open(this.dialogDelete);
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


