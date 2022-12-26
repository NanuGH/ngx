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
  showAddForm : boolean =false;
  showSmartTable: boolean = false;
  showPersonTable: boolean = false;

  searchForm: FormGroup;
  source: LocalDataSource = new LocalDataSource();
  sourcePerson: LocalDataSource = new LocalDataSource();
  idEmpl: string;
  idPerson: string;
  personResponse: PersonModel;

  dialogRef: NbDialogRef<any>
  @ViewChild('dialogDelete') dialogDelete: TemplateRef<any>;


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
        identifNumber: ["hRduMN"]
      }),
    });
  }

  resultForm = this.formBuilder.group({
    id: [""], name: [""], surname: [""], bloodCode: [""], docIdent: [""], birthday: [""], dmSex: [""],
    homeAdd: [""], jobAddress: [""], profession: [""], grade: [""], email: [""],

    identifNumber: [""], dmfunction: [""],
  });

  convertFormToModel() {
    var viewModelObject = <SearchDonner>{
      identifNumber: this.searchGroup.get("identifNumber").value,
    };
    return viewModelObject;
  }

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
        valuePrepareFunction: (cell, row) => {
          return row.idPerson.namePerson + ' ' + row.idPerson.surnamePerson}
      },
      dmfunction: {
        title: 'Função',
        type: 'string',
      },
      identifNumber: {
        title: 'Nº Identificação',
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
    this.donnerService.getDonnerBy(this.convertFormToModel()).subscribe((data: any) => {
        this.source.load(data.details[0]);
      });
    console.log("Donners");


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

      this.donnerService.findById(this.idEmpl).subscribe(
        (data: any) => {
          console.log(data.details[0]);

          //person fields
          this.personResponse = data.details[0];
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
          this.resultForm.get("dmfunction").setValue($event.data.dmfunction);
          this.resultForm.get("email").setValue($event.data.email);

        }
      );
    }
  }


  /******** ADD  *************** */

  showAddPerson() {
    this.showAddForm = true;
    this.showSmartTable = false;
  }

  convertPersonData() {
    var personModelObject = <PersonModel>{
      namePerson: this.addOrEditForm.get("name").value,
      surnamePerson: this.addOrEditForm.get("surname").value,
      dmBloodCode: this.addOrEditForm.get("bloodCode").value,
      dmDocIdent: this.addOrEditForm.get("dmDocIdent").value,
      birthday: this.addOrEditForm.get("birthday").value,
      picturePerson: "picture",
      dmSex: this.addOrEditForm.get("dmSex").value,
      dmHomeAdd: this.addOrEditForm.get("homeAdd").value,
      jobAddress: this.addOrEditForm.get("jobAddress").value,
      profession: this.addOrEditForm.get("profession").value,
      grade: this.addOrEditForm.get("grade").value,
      whoInserted: "Hernani",
      whoUpdated: "Hernani",
      status: "true",
      email: this.addOrEditForm.get("email").value,
    };
    return personModelObject;
  }

  addDonner() {
    this.convertFormToModel();
    this.donnerService.create(this.convertAddOrEditFormToModel(),this.idPerson).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
    console.log(this.convertFormToModel());
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

 /* convertAddOrEditFormToModel() {
    var viewModelObject = <EmployeeModel>{
      Person: this.convertPersonData(),
      identifNumber: this.addOrEditForm.get("identifNumber").value,
      dmfunction: this.addOrEditForm.get("dmfunction").value,
      email: this.addOrEditForm.get("email").value,
      pw: this.addOrEditForm.get("pw").value,
      whoUpdated: "Hernani"
    };
    return viewModelObject;
  }*/

  convertAddOrEditFormToModel() {
    var viewModelObject = <DonnerModel>{
      Person: this.convertPersonData(),
      kell: this.addOrEditForm.get("kell").value,
      dmHemolisina: this.addOrEditForm.get("dmHemolisina").value,
      celFalcif: this.addOrEditForm.get("celFalcif").value,
      phenotype: this.addOrEditForm.get("phenotype").value,
      dmTypeDonor: this.addOrEditForm.get("dmTypeDonor").value,
      personalBackground: this.addOrEditForm.get("personalBackground").value,
      clinicalExam: this.addOrEditForm.get("clinicalExam").value,
      physicalExam: this.addOrEditForm.get("physicalExam").value,

      whoUpdated: "Hernani"
    };
    return viewModelObject;
  }

  /************** Edit ***********/

  public onEdit($event) {
    this.idEmpl = $event.data.id;

    this.donnerService.findById(this.idEmpl).subscribe(
      (data: any) => {
        console.log(data.details[0]);

        //person fields
        this.personResponse = data.details[0];
        this.addOrEditForm.get("name").setValue($event.data.idPerson.namePerson);
        this.addOrEditForm.get("surname").setValue($event.data.idPerson.surnamePerson);
        this.addOrEditForm.get("bloodCode").setValue($event.data.idPerson.dmBloodCode);
        this.addOrEditForm.get("dmDocIdent").setValue($event.data.idPerson.dmDocIdent);
        this.addOrEditForm.get("birthday").setValue($event.data.idPerson.birthday);
        this.addOrEditForm.get("dmSex").setValue($event.data.idPerson.dmSex);
        this.addOrEditForm.get("homeAdd").setValue($event.data.idPerson.dmHomeAdd);
        this.addOrEditForm.get("jobAddress").setValue($event.data.idPerson.jobAddress);
        this.addOrEditForm.get("profession").setValue($event.data.idPerson.profession);
        this.addOrEditForm.get("grade").setValue($event.data.idPerson.grade);
        //employee fields
        this.addOrEditForm.get("identifNumber").setValue($event.data.identifNumber);
        this.addOrEditForm.get("dmfunction").setValue($event.data.dmfunction);
        this.addOrEditForm.get("email").setValue($event.data.email);
        this.addOrEditForm.get("pw").setValue($event.data.pw);
      }
    );

    this.showAddOrEditForm = true;
    this.showSmartTable = false;
  }

  editEmployee() {
    /* this.convertAddOrEditFormToModel();
    this.donnerService.edit(this.idEmpl, this.convertAddOrEditFormToModel()).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
    console.log(this.convertAddOrEditFormToModel()); */

  }

  /**************////// Change Status */
  public onDelete($event) {
    this.idEmpl = $event.data.id;
    this.dialogRef = this.dialogService.open(this.dialogDelete);
  }

 public onDeleteConfirm() {
      /* this.donnerService.changeStatus(this.idEmpl).subscribe(
        (data: any) => {
          console.log(data);
          this.dialogRef.close();
        }
      ); */
 }

 /******************    GET PERSON ********/

 @ViewChild('dialogPerson') dialogPerson: TemplateRef<any>;

 settingsPerson = {
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
 searchPerson() {
   this.valueToSearch = this.addForm.get("value").value;
   this.showPersonTable = true;
   this.showSearchCard=false;
   this.dialogRef = this.dialogService.open(this.dialogPerson);
   this.personService.getByOne(this.valueToSearch).subscribe(
     (data:any)=>{
       this.sourcePerson = data.details;
     }
   );
 }

 closeDonnerTable(){
   this.showPersonTable = false;
   this.showSearchCard=true;
   this.dialogRef.close();
 }



  /******** ADD  *************** */

  addForm = this.formBuilder.group({
    kell:[""], celFalcif:[""], dmHemolisina:[""], value:[""], idPerson:[""],phenotype:[""],
    dmTypeDonor:[""], personalBackground:[""], clinicalExam:[""],physicalExam:[""]

  })

  convertAddFormToModel() {
    var viewModelObject = <DonnerModel>{
      Person: this.convertPersonData(),
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


  onPersonSelect($event){
    if ($event.data.id) {
      this.idPerson = $event.data.id;
          this.personResponse = $event.data;
          this.addForm.get("value").setValue(this.personResponse.namePerson + " " + this.personResponse.surnamePerson) ;
          this.addForm.get("personalBackground").setValue($event.data.personalBackground);
          this.addForm.get("clinicalExam").setValue($event.data.clinicalExam);
          this.addForm.get("physicalExam").setValue($event.data.physicalExam);
          this.addForm.get("kell").setValue($event.data.kell);
          this.addForm.get("dmHemolisina").setValue($event.data.dmHemolisina);
          this.addForm.get("phenotype").setValue($event.data.phenotype);
          this.addForm.get("idPerson").setValue(this.idPerson);
    }
    this.dialogRef.close();
  }

  addCollect() {
    this.idPerson = this.addForm.get("idPerson").value;
    console.log(this.idPerson);

    this.convertFormToModel();
     this.donnerService.create(this.convertAddFormToModel(),this.idPerson).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }


}
