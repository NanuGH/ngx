import { PersonService } from '../../service/person/personService';
import { BloodCollectModel } from '../../models/response/BloodCollectModel';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonModel } from '../../models/response/personModel';

import { BloodCollectService } from '../../service/blood-collection.ts/BloodCollectService';
import { SampleService } from '../../service/sample/SampleService';
import { SearchSample } from '../../models/request/searchSample';
import { SampleModel } from '../../models/response/sampleModel';
import { BloodTestService } from '../../service/bloodTest/BloodTestService';
import { BloodTestModel } from '../../models/response/bloodTestModel';
import { TransfusionService } from '../../service/transfusion/transfusionService';
import { SearchTransf } from '../../models/request/searchTransf';

@Component({
  selector: 'ngx-stock',
  templateUrl: "./transfusion.component.html",
  styleUrls: ["./transfusion.component.scss"],
})
export class TransfusionComponent implements OnInit {

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
  personResponse: PersonModel;
  testResponse: BloodTestModel;
  collectResponse: BloodCollectModel;
  refreshTable: BloodCollectModel;


  constructor(
    private formBuilder: FormBuilder,
    private bloodCollectService: BloodCollectService,
    private personService: PersonService,
    private sampleService: SampleService,
    private bloodService: BloodCollectService,
    private bloodtestService: BloodTestService,
    private transfService: TransfusionService,
    private dialogService: NbDialogService,) {
  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        transfNumber: ["ZvHWx2"],
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
      transfNumber: {
        title: 'Nº Transfusão',
        type: 'string',
      },
      namePerson: {
        title: 'Receptor',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          return row.idPerson.namePerson + ' '
               + row.idPerson.surnamePerson
        }
      },
      Funcionário: {
        title: 'Funcionário',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          return row.idEmployee.idPerson.namePerson + ' '
          + row.idEmployee.idPerson.surnamePerson }
      },
      dmBloodCode: {
        title: 'G. Sanguíneo',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.idStock.collection.bloodType }
      },
      insertionDate: {
        title: 'Data Inserção',
        type: 'string',
      },
    },
  };

  ////////        GET  with Params        ///////

  convertFormToModel() {
    var viewModelObject = <SearchTransf>{
      transfNumber: this.searchGroup.get("transfNumber").value,
      //insertionDate: this.searchGroup.get("insertionDate").value,
    };
    return viewModelObject;
  }

  onSearchFormSubmit() {
    this.showSmartTable = true
    this.transfService.findByTransfNumber(this.convertFormToModel())
      .subscribe((data: any) => {
        /* var filtroStatus = data.details[0].filter(
          function (pesquisa) {
            var list = String(pesquisa.status)
            return list == "true";
          }
        );
        this.source.load(filtroStatus); */
        this.source.load(data.details);
      });
    this.showAddForm = false;
  }

  clearSearchForm() {
    this.searchForm.reset();
  }

  /******** Get BY ID - Details */

  public onTransfSelect($event) {
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
    expirationDate: [""], sampleNumber: [""], value: [""]
  })

  convertAddFormToModel() {
    var viewModelObject = <SampleModel>{
      expirationDate: this.addForm.get("expirationDate").value,
      sampleNumber: this.addForm.get("sampleNumber").value,
    };
    return viewModelObject;
  }


  onCollectSelect($event) {
    if ($event.data.id) {
      this.idCollection = $event.data.id;
      this.collectResponse = $event.data;
      this.addForm.get("value").setValue(this.collectResponse.collectionNumber);
      this.addForm.get("expirationDate").setValue($event.data.expirationDate);
    }
    this.dialogRef.close();
  }


  addCollect() {
    this.convertFormToModel();
    this.sampleService.create(this.convertAddFormToModel(),this.idCollection, 'bbd6c39a-3c69-497c-8ca6-fab04dd51698').subscribe(
      (data: any) => {
        console.log(data);
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
      },
      namePerson: {
        title: 'Doador',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
                return row.idPerson.namePerson + ' '
              + row.idPerson.surnamePerson
            }

      },
      bloodType: {
        title: 'G. Sanguíneo',
        type: 'string',
      },
    },
  };

  valueToSearch: string;
  searchSample() {
    this.valueToSearch = this.addForm.get("value").value;
    this.showdonnerTable = true;
    this.showSearchCard = false;
    this.dialogRef = this.dialogService.open(this.dialogPerson);
    this.bloodCollectService.findByCollectionNumber(this.valueToSearch).subscribe(
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

