import { PersonService } from '../../service/person/personService';
import { BloodCollectModel } from '../../models/response/BloodCollectModel';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonModel } from '../../models/response/personModel';

import { BloodCollectService } from '../../service/blood-collection.ts/BloodCollectService';
import { SampleService } from '../../service/sample/SampleService';
import { SearchSample } from '../../models/request/searchSample';
import { SampleModel } from '../../models/response/sampleModel';
import { BloodTestService } from '../../service/bloodTest/BloodTestService';
import { BloodTestModel } from '../../models/response/bloodTestModel';

@Component({
  selector: 'ngx-stock',
  templateUrl: "./bloodTest.component.html",
  styleUrls: ["./bloodTest.component.scss"],
})
export class BloodTestComponent implements OnInit {

  showSearchCard: boolean = true;
  showResultForm: boolean = false;
  showEditForm: boolean = false;
  showAddForm: boolean = false;
  showSmartTable: boolean = false;
  showdonnerTable: boolean = false;

  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();
  sourceCollection: LocalDataSource = new LocalDataSource();
  idEmpl: string;
  idTest: string;
  idCollection: string;
  idSample: string;
  personResponse: PersonModel;
  testResponse: BloodTestModel;
  collectResponse: BloodCollectModel;
  refreshTable: BloodCollectModel;


  constructor(
    private formBuilder: FormBuilder,
    private bloodCollectService: BloodCollectService,
    private personService: PersonService,
    private sampleService: SampleService,
    private bloodTestService: BloodTestService,
    private bloodService: BloodCollectService,
    private bloodtestService: BloodTestService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService) {
  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        testNumber: ["v0chiq"],
        //insertionDate: ["2022-11-07"]
      }),
    });
  }

  resultForm = this.formBuilder.group({
    //Blood Test
    testNumber: [""], aghbs: [""], hcv: [""],
    hiv: [""],vdrl: [""],  bloodType: [""],dmConclusion: [""],
    //Sample
    sampleNumber: [""], expirationDate: [""],
    //Employee
    nameEmployee: [""], identifNumber: [""]
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
      testNumber: {
        title: 'Nº Análise',
        type: 'string',
      },
      namePerson: {
        title: 'Doador',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          return row.idSample.idCollection.idPerson.namePerson + ' '
               + row.idSample.idCollection.idPerson.surnamePerson
        }
      },
      surnamePerson: {
        title: 'Funcionário',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.idSample.idEmployee.identifNumber }
      },
      dmBloodCode: {
        title: 'G. Sanguíneo',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.idSample.idCollection.bloodType }
      },
      insertionDate: {
        title: 'Data Inserção',
        type: 'string',
      },
    },
  };

  ////////        GET  with Params        ///////

  convertFormToModel() {
    var viewModelObject = <SearchSample>{
      sampleNumber: this.searchGroup.get("testNumber").value,
      //insertionDate: this.searchGroup.get("insertionDate").value,
    };
    return viewModelObject;
  }

  onSearchFormSubmit() {
    this.showSmartTable = true
    this.bloodtestService.findByTestNumber(this.convertFormToModel())
      .subscribe((data: any) => {
        /* var filtroStatus = data.details[0].filter(
          function (pesquisa) {
            var list = String(pesquisa.status)
            return list == "true";
          }
        );
        this.source.load(filtroStatus); */

        this.source.load(data.details);
      }

      );
    this.showAddForm = false;
  }

  clearSearchForm() {
    this.searchForm.reset();
  }

  /******** Get BY ID - Details */

  public onTestSelect($event) {
    this.showResultForm = true;
    this.showSearchCard = false;

    if ($event.data.id) {
      this.idTest = $event.data.id;

      this.bloodtestService.findById(this.idTest).subscribe(
        (data: any) => {

          this.testResponse = data.details[0];

          //blood collection fields
          this.resultForm.get("testNumber").setValue($event.data.testNumber);
          this.resultForm.get("aghbs").setValue($event.data.aghbs);
          this.resultForm.get("hcv").setValue($event.data.hcv);
          this.resultForm.get("hiv").setValue($event.data.hiv);
          this.resultForm.get("vdrl").setValue($event.data.vdrl);
          this.resultForm.get("bloodType").setValue($event.data.idSample.idCollection.bloodType);
          this.resultForm.get("dmConclusion").setValue($event.data.dmConclusion);
          //sample fields
          this.resultForm.get("sampleNumber").setValue($event.data.idSample.sampleNumber);
          this.resultForm.get("expirationDate").setValue($event.data.idSample.idCollection.expirationDate);
          //employee fields
          this.resultForm.get("nameEmployee").setValue($event.data.idEmployee.idPerson.namePerson + " "
                                                     + $event.data.idEmployee.idPerson.surnamePerson);
          this.resultForm.get("identifNumber").setValue($event.data.idEmployee.identifNumber);
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
    testNumber: [""], aghbs: ["false"], hcv: ["false"],hiv: ["false"], vdrl: ["false"], dmConclusion: ["apto"],amostra: ["dfg45"]
  })

  convertAddFormToModel() {
    var viewModelObject = <BloodTestModel>{
      aghbs: this.addForm.get("aghbs").value,
      hcv: this.addForm.get("hcv").value,
      hiv: this.addForm.get("hiv").value,
      vdrl: this.addForm.get("vdrl").value,
      dmConclusion: this.addForm.get("dmConclusion").value,
    };
    return viewModelObject;
  }


  onSampleSelect($event) {
    if ($event.data.id) {
      this.idSample = $event.data.id;
      this.addForm.get("amostra").setValue($event.data.sampleNumber);

      this.collectResponse = $event.data;

    }
    this.dialogRef.close();
  }


  addTest() {
    this.convertFormToModel();
    this.bloodTestService.create(this.convertAddFormToModel(),'bbd6c39a-3c69-497c-8ca6-fab04dd51698',this.idSample ).subscribe(
      (data: any) => {
        this.toastrService.success('Inserido com sucesso', 'Sucesso');
        console.log(data);
       // this.showAddForm=false
      },
      (error)=>{
        this.toastrService.warning('Erro de Inserção', 'Erro');
      }
    )
  }



  /************** Edit ***********/

  editForm = this.formBuilder.group({
    expirationDate: ["as"], sampleNumber: ["asd"]
  });

/*   convertEditFormToModel() {
    var viewModelObject = <SampleModel>{
      expirationDate: this.editForm.get("expirationDate").value,
      sampleNumber: this.editForm.get("sampleNumber").value,
    };
    return viewModelObject;
  }

  public onEdit($event) {
    this.idCollection = $event.data.id;
    this.editForm.get("expirationDate").setValue($event.data.expirationDate);
    this.editForm.get("qtdde").setValue($event.data.qtdde);
    this.editForm.get("externCollection").setValue($event.data.externCollection);

    this.showEditForm = true; this.showSmartTable = false;
  }

  editCollect() {

    this.convertEditFormToModel();
    this.bloodCollectService.edit(this.convertEditFormToModel(),
      this.idCollection, 'bbd6c39a-3c69-497c-8ca6-fab04dd51698').subscribe(
        (data: any) => {
          console.log(data);
        }
      )
    this.showEditForm = false;
    this.showSmartTable = true;
  } */

  /************** Change Status (DELETE) ******/

  dialogRef: NbDialogRef<any>
  @ViewChild('dialogDelete') dialogDelete: TemplateRef<any>;

  public onDelete($event) {
    this.idTest = $event.data.id;
    this.refreshTable = $event.data;
    this.dialogRef = this.dialogService.open(this.dialogDelete);
  }

  public onDeleteConfirm() {
    this.bloodCollectService.changeStatus(this.idTest).subscribe(
      (data: any) => {
        this.dialogRef.close();
        this.source.remove(this.refreshTable);
      }
    );

  }


  /******************    GET COLLECTION ********/

  @ViewChild('dialogPerson') dialogPerson: TemplateRef<any>;

  settingsCollection = {
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
      collectionNumber: {
        title: 'Nº Colheita',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          return row.idCollection.collectionNumber
      }
      },
      namePerson: {
        title: 'Doador',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
                return row.idCollection.idPerson.namePerson + ''+row.idCollection.idPerson.surnamePerson

            }

      },
      bloodType: {
        title: 'G. Sanguíneo',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          return row.idCollection.bloodType


      }
      },
    },
  };

  convertFormValue() {
    var viewModelObjectValue = <SearchSample>{
      value: this.addForm.get("amostra").value,
      //insertionDate: this.searchGroup.get("insertionDate").value,
    };
    return viewModelObjectValue;
  }


  searchSample() {
    this.showdonnerTable = true;
    this.showSearchCard = false;
    this.dialogRef = this.dialogService.open(this.dialogPerson);
    this.sampleService.findBySampleNumber(this.convertFormValue()).subscribe(
      (data: any) => {
        this.sourceCollection = data.details;

      }
    );
  }

  closeDonnerTable() {
    this.showdonnerTable = false;
    this.showSearchCard = true;
    this.dialogRef.close();
  }

}

