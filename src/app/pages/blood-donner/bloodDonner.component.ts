import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonModel } from '../../models/response/personModel';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { DonnerService } from '../../service/blood-donnner/DonnerService';
import { SearchDonner } from '../../models/request/searchDonner';
import { DonnerModel } from '../../models/response/donnerModel';
import { PersonService } from '../../service/person/personService';

@Component({
  selector: 'ngx-employee',
  templateUrl: "./bloodDonner.component.html",
  styleUrls: ["./bloodDonner.component.scss"],
})
export class BloodDonnerComponent implements OnInit {

  /* showSearchCard: boolean = true;
  showResultForm: boolean = false;
  showAddOrEditForm: boolean = false;
  showSmartTable: boolean = false; */

  showSearchCard: boolean = true;
  showResultForm: boolean = false;
  showAddOrEditForm: boolean = false;
  showAddForm: boolean = false;
  showSmartTable: boolean = false;
  showPersonTable: boolean = false;
  IfEdit: boolean = false;

  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();
  sourcePerson: LocalDataSource = new LocalDataSource();
  idEmpl: string;
  idDonner: string;
  idPerson: string;
  personResponse: PersonModel;
  refreshTable: DonnerModel;


  constructor(
    private formBuilder: FormBuilder,
    private donnerService: DonnerService,
    private personService: PersonService,
    private dialogService: NbDialogService) {

  }

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        identifNumber: ["mxvlEl"],
      }),
    });
  }

  resultForm = this.formBuilder.group({
    namePerson: [""], surnamePerson: [""], dmBloodCode: [""], dmDocIdent: [""], birthday: [""], dmSex: [""],
    dmHomeAdd: [""], jobAddress: [""], profession: [""], grade: [""], email: [""], telefone: [""],

    identifNumber: [""], kell: [""], personalBackground: [""], phenotype: [""], dmTypeDonor: [""],
    physicalExam: [""], status: [""], celFalcif: [""], clinicalExam: [""], dmHemolisina: [""]
  });

  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }

  /*********** CLOSE FORMS */
  closeResult() {
    this.showSmartTable = false;
    this.resultForm.reset();
  }

  closeAddForm() {
    this.showAddForm = false;
    this.addOrEditForm.reset();
  }

  closeDetails() {
    this.showResultForm = false;
    this.showSearchCard = true;
  }

  /////  SMART TABLE   ////////

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
          return row.idPerson.namePerson + ' ' + row.idPerson.surnamePerson
        }
      },
      dmBloodCode: {
        title: 'Grupo Sanguíneo',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          return row.idPerson.dmBloodCode
        }

      },
      identifNumber: {
        title: 'Nº Identificação',
        type: 'string',
      },
      email: {
        title: 'email',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          return row.idPerson.email
        }

      },
    },
  };


  ////////  GET  with Params  ///////

  convertFormToModel() {
    var viewModelObject = <SearchDonner>{
      identifNumber: this.searchGroup.get("identifNumber").value,
    };
    return viewModelObject;
  }

  onSearchFormSubmit() {

    this.showSmartTable = true
    this.donnerService.getDonnerBy(this.convertFormToModel())
      .subscribe((data: any) => {
        var filtroStatus = data.details.filter(
          function (pesquisa) {
            var list = String(pesquisa.status)
            return list == "true";
          }
        );
        this.source.load(filtroStatus);
        // this.source.load(data.details);
      });

  }


  clearSearchForm() {
    this.searchForm.reset();
  }


  /******** Get BY ID - Details */

  public onDonnerSelect($event) {
    this.showResultForm = true;
    this.showSearchCard = false;
    this.IfEdit = false;

    if ($event.data.id) {
      this.idDonner = $event.data.id;
      console.log($event.data);
      this.resultForm.get("namePerson").setValue($event.data.idPerson.namePerson);
      this.resultForm.get("surnamePerson").setValue($event.data.idPerson.surnamePerson);
      this.resultForm.get("dmBloodCode").setValue($event.data.idPerson.dmBloodCode);
      this.resultForm.get("dmDocIdent").setValue($event.data.idPerson.dmDocIdent);
      this.resultForm.get("birthday").setValue($event.data.idPerson.birthday);
      this.resultForm.get("dmSex").setValue($event.data.idPerson.dmSex);
      this.resultForm.get("dmHomeAdd").setValue($event.data.idPerson.dmHomeAdd);
      this.resultForm.get("jobAddress").setValue($event.data.idPerson.jobAddress);
      this.resultForm.get("profession").setValue($event.data.idPerson.profession);
      this.resultForm.get("grade").setValue($event.data.idPerson.grade);
      this.resultForm.get("telefone").setValue($event.data.idPerson.telefone);
      this.resultForm.get("email").setValue($event.data.idPerson.email);

      //donner fields
      this.resultForm.get("identifNumber").setValue($event.data.identifNumber);
      this.resultForm.get("celFalcif").setValue($event.data.celFalcif);
      this.resultForm.get("kell").setValue($event.data.kell);
      this.resultForm.get("dmHemolisina").setValue($event.data.dmHemolisina);
      this.resultForm.get("phenotype").setValue($event.data.phenotype);
      this.resultForm.get("kell").setValue($event.data.kell);
      this.resultForm.get("dmTypeDonor").setValue($event.data.dmTypeDonor);
      this.resultForm.get("personalBackground").setValue($event.data.personalBackground);
      this.resultForm.get("clinicalExam").setValue($event.data.clinicalExam);
      this.resultForm.get("physicalExam").setValue($event.data.physicalExam);
      this.resultForm.get("status").setValue($event.data.status);
      this.resultForm.get("dmTypeDonor").setValue($event.data.dmTypeDonor);
    }

  }


  /******** ADD  *************** */

  showAddPerson() {
    this.showAddForm = true;
    this.showSmartTable = false;
  }

  convertPersonData() {
    var personModelObject = <PersonModel>{
      namePerson: this.resultForm.get("namePerson").value,
      surnamePerson: this.resultForm.get("surnamePerson").value,
      dmBloodCode: this.resultForm.get("dmBloodCode").value,
      dmDocIdent: this.resultForm.get("dmDocIdent").value,
      birthday: this.resultForm.get("birthday").value,
      picturePerson: "picture",
      dmSex: this.resultForm.get("dmSex").value,
      dmHomeAdd: this.resultForm.get("dmHomeAdd").value,
      jobAddress: this.resultForm.get("jobAddress").value,
      profession: this.resultForm.get("profession").value,
      grade: this.resultForm.get("grade").value,
      whoInserted: "Hernani",
      whoUpdated: "Hernani",
      status: "true",
      email: this.resultForm.get("email").value,
      telefone: this.resultForm.get("telefone").value,
    };
    return personModelObject;
  }


  /*  addForm = this.formBuilder.group({
     name: ["as"], surname: ["asd"], bloodCode: ["s"], dmDocIdent: ["asd"],
     birthday: ["2022-09-08"], dmSex: ["s"], homeAdd: ["asdf"], jobAddress: ["asf"],
     profession: ["fwrt"], grade: ["herg"],

     identNumber: ["56256"], dmFunction: ["efwe"], email: ["sdff@ds.com"],
     pw: ["zdf"]
   }); */

  addOrEditForm = this.formBuilder.group({
    dmTypeDonor: [""], kell: [""], celFalcif: [""], dmHemolisina: [""],
    phenotype: [""], personalBackground: [""], clinicalExam: [""], physicalExam: [""]
  });

  /************** Edit ***********/

  public onEdit($event) {
    this.idDonner = $event.data.id;

    if ($event.data.id) {
      this.idDonner = $event.data.id;
      console.log($event.data);
      //person fields
      this.resultForm.get("namePerson").setValue($event.data.idPerson.namePerson);
      this.resultForm.get("surnamePerson").setValue($event.data.idPerson.surnamePerson);
      this.resultForm.get("dmBloodCode").setValue($event.data.idPerson.dmBloodCode);
      this.resultForm.get("dmDocIdent").setValue($event.data.idPerson.dmDocIdent);
      this.resultForm.get("birthday").setValue($event.data.idPerson.birthday);
      this.resultForm.get("dmSex").setValue($event.data.idPerson.dmSex);
      this.resultForm.get("dmHomeAdd").setValue($event.data.idPerson.dmHomeAdd);
      this.resultForm.get("jobAddress").setValue($event.data.idPerson.jobAddress);
      this.resultForm.get("profession").setValue($event.data.idPerson.profession);
      this.resultForm.get("grade").setValue($event.data.idPerson.grade);
      this.resultForm.get("telefone").setValue($event.data.idPerson.telefone);
      this.resultForm.get("email").setValue($event.data.idPerson.email);
      //donner fields
      this.resultForm.get("identifNumber").setValue($event.data.identifNumber);
      this.resultForm.get("celFalcif").setValue($event.data.celFalcif);
      this.resultForm.get("kell").setValue($event.data.kell);
      this.resultForm.get("dmHemolisina").setValue($event.data.dmHemolisina);
      this.resultForm.get("phenotype").setValue($event.data.phenotype);
      this.resultForm.get("kell").setValue($event.data.kell);
      this.resultForm.get("dmTypeDonor").setValue($event.data.dmTypeDonor);
      this.resultForm.get("personalBackground").setValue($event.data.personalBackground);
      this.resultForm.get("clinicalExam").setValue($event.data.clinicalExam);
      this.resultForm.get("physicalExam").setValue($event.data.physicalExam);
      this.resultForm.get("status").setValue($event.data.status);
      this.resultForm.get("dmTypeDonor").setValue($event.data.dmTypeDonor);
    }

    this.showResultForm = true;
    this.showSearchCard = false;
    this.IfEdit = true;
  }

  convertEditFormToModel() {
    var viewModelObject = <DonnerModel>{
      idPerson: this.convertPersonData(),
      kell: this.resultForm.get("kell").value,
      dmHemolisina: this.resultForm.get("dmHemolisina").value,
      celFalcif: this.resultForm.get("celFalcif").value,
      phenotype: this.resultForm.get("phenotype").value,
      dmTypeDonor: this.resultForm.get("dmTypeDonor").value,
      personalBackground: this.resultForm.get("personalBackground").value,
      clinicalExam: this.resultForm.get("clinicalExam").value,
      physicalExam: this.resultForm.get("physicalExam").value,
      whoInserted: "string",
      whoUpdated: "string",
    };
    return viewModelObject;
  }

  editDonner() {
    this.convertEditFormToModel();
    this.donnerService.edit(this.convertEditFormToModel(), this.idDonner, 'bbd6c39a-3c69-497c-8ca6-fab04dd51698').subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }

  /**************////// Change Status */
  /* public onDelete($event) {
    this.idEmpl = $event.data.id;
    this.dialogRef = this.dialogService.open(this.dialogDelete);
  }

 public onDeleteConfirm() {
      /* this.donnerService.changeStatus(this.idEmpl).subscribe(
        (data: any) => {
          console.log(data);
          this.dialogRef.close();
        }
      );
 } */

  /******************    GET PERSON ********/

  @ViewChild('dialogPerson') dialogPerson: TemplateRef<any>;

  settingsPerson = {
    noDataMessage: "Sem Dados",
    mode: 'external',
    actions: { columnTitle: 'Ações', add: false, edit: false, delete: false },
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

  valueToSearch: string;
  searchPerson() {
    this.valueToSearch = this.addForm.get("value").value;
    this.showPersonTable = true;
    this.showSearchCard = true;

    this.dialogRef = this.dialogService.open(this.dialogPerson);
    this.personService.getByOne(this.valueToSearch).subscribe(
      (data: any) => {
        //this.sourcePerson = data.details[0];
        var filtroStatus = data.details[0].filter(
          function (pesquisa) {
           var list = Boolean(pesquisa.status)
           return list == true;
          });
        this.sourcePerson.load(filtroStatus);

      }
    );
  }

  closeDonnerTable() {
    this.showPersonTable = false;
    this.showSearchCard = true;
    this.dialogRef.close();
  }



  /******** ADD  *************** */

  addForm = this.formBuilder.group({
    kell: [""], celFalcif: [""], dmHemolisina: [""], value: [""], phenotype: [""],
    dmTypeDonor: [""], personalBackground: [""], clinicalExam: [""], physicalExam: [""]

  })

  convertAddFormToModel() {
    var viewModelObject = <DonnerModel>{
      //Person: this.convertPersonData(),
      kell: this.addForm.get("kell").value,
      dmHemolisina: this.addForm.get("dmHemolisina").value,
      celFalcif: this.addForm.get("celFalcif").value,
      phenotype: this.addForm.get("phenotype").value,
      dmTypeDonor: this.addForm.get("dmTypeDonor").value,
      personalBackground: this.addForm.get("personalBackground").value,
      clinicalExam: this.addForm.get("clinicalExam").value,
      physicalExam: this.addForm.get("physicalExam").value,
      whoUpdated: "Hernani"
    };
    return viewModelObject;
  }


  onPersonSelect($event) {
    if ($event.data.id) {
      this.idPerson = $event.data.id;
      this.personResponse = $event.data;
      this.addForm.get("value").setValue(this.personResponse.namePerson + " " + this.personResponse.surnamePerson);
      this.addForm.get("personalBackground").setValue($event.data.personalBackground);
      this.addForm.get("clinicalExam").setValue($event.data.clinicalExam);
      this.addForm.get("physicalExam").setValue($event.data.physicalExam);
      this.addForm.get("kell").setValue($event.data.kell);
      this.addForm.get("dmHemolisina").setValue($event.data.dmHemolisina);
      this.addForm.get("phenotype").setValue($event.data.phenotype);
    }
    this.dialogRef.close();
  }

  addDonner() {
    console.log(this.idPerson);

    this.convertFormToModel();
    this.donnerService.create(this.convertAddFormToModel(), 'bbd6c39a-3c69-497c-8ca6-fab04dd51698', this.idPerson).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }


  /******** Change STATUS (DELETE)  *************** */

  dialogRef: NbDialogRef<any>
  @ViewChild('dialogDelete') dialogDelete: TemplateRef<any>;

  public onDelete($event) {
    this.idDonner = $event.data.id;
    this.refreshTable = $event.data;
    this.dialogRef = this.dialogService.open(this.dialogDelete);
  }

  public onDeleteConfirm() {
    this.donnerService.changeStatus(this.idDonner).subscribe(
      (data: any) => {
        this.dialogRef.close();
        this.source.remove(this.refreshTable);
      }
    );
  }



}
