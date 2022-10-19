import { DomainModel } from './../../models/response/domainModel';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { LocalDataSource } from "ng2-smart-table";
import { DomainService } from "../../service/domain/domainService";

@Component({
  selector: "ngx-person",
  templateUrl: "./bloodtype.component.html",
  styleUrls: ["./bloodtype.component.scss"],
})
export class BloodtypeComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  loadingList: boolean = false;
  searchForm: FormGroup;

  constructor(private domainService: DomainService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getDomain();
    this.loadForms();
  }

  loadForms() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        domain: [""],
      }),
    });
  }

  convertFormToModel() {
    var viewModelObject = <DomainModel>{
      domain: this.searchGroup.get("domain").value
    };
    return viewModelObject;
  }

  clearSearchForm(){
  }


  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }
  /////    SMART TABLE     //////////

   settings = {
     noDataMessage: "Sem Dados",
     //mode: 'external',
     actions: { columnTitle: 'Ações', add: true },
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
       domain: {
         title: 'Dominio',
         type: 'string',
       },
       dmName: {
         title: 'Descrição',
         type: 'string',
       },
       dmCode: {
         title: 'Cod.',
         type: 'string',
       }
     },
   };

  /******** GET  *************** */

  onSearchFormSubmit(){
    this.domainService.getByDomain(this.convertFormToModel())
                                     .subscribe((data:any)=>{
      this.source.load(data.details);
      console.log("zdsfgdg");

    })
  }

  private getDomain() {
    this.domainService.get().subscribe((data) => {
      this.source.load(data.details);
    });
  }

  /******** ADD  *************** */
  onAdd($event) {}

  /************** Edit ***********/
  onEdit($event) {}

  onDelete($event) {}

  /*settings = {
    columns: {
      id: {
        title: "ID",
      },
      name: {
        title: "Full Name",
      },
      username: {
        title: "User Name",
      },
      email: {
        title: "Email",
      },
    },
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    // ... other rows here
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
    },
  ];*/
}
