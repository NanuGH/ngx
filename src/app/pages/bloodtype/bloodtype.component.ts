import { DomainModel } from "./../../models/response/domainModel";
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
  domainName: any;
  domainSelfId: DomainModel[];

  constructor(
    private domainService: DomainService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getBySelfId();
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
      domain: this.searchGroup.get("domain").value,
    };
    return viewModelObject;
  }

  clearSearchForm() {}

  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }
  /////    SMART TABLE     //////////

  settings = {
    noDataMessage: "Sem Dados",
    //mode: 'external',
    //actions: { columnTitle: 'Ações', add: true },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      domain: { title: "Dominio",type: "string",
                /* editor: {
                  type: "list",
                  config: { list: [] },
                }, */
      },
      dmName: {title: "Descrição", type: "string",},
      dmCode: {title: "Cod.",type: "string",},
    },
  };
  /******** GET  *************** */
  private getBySelfId() {
    this.domainService.getBySelfId(null).subscribe((data) => {
      this.domainSelfId = data.details;
      /* for (const i of this.domainSelfId) {
        this.settings.columns.domain.editor.config.list.push({
          value: i.domain,
          title: i.domain,
        });
        this.settings = Object.assign({}, this.settings);
      } */
    });
  }

  onSearchFormSubmit() {
    this.loadingList = true;
    this.domainService
      .getByDomain(this.convertFormToModel())
      .subscribe((data: any) => {
        this.source.load(data.details);
      });
    this.loadingList = false;
  }

  private getDomain() {
    this.domainService.get().subscribe((data) => {
      this.domainName = data.details;
      this.source.load(data.details);
    });
  }

  /******** ADD  *************** */
  onAdd(event) {
    const domain = <DomainModel>{
      domain: event.newData.domain,
      dmName: event.newData.dmName,
      dmCode: event.newData.dmCode,
      dmOrder:event.newData.dmOrder,
      selfId: event.newData.selfId,
    };

    this.domainService.create(domain).subscribe(
      (data) => {
      this.domainService
        .getByDomain(event.newData.domain)
        .subscribe((data: any) => {
          this.source.load(data.details);
        });
    });
  }

  /************** Edit ***********/

  onEdit(event) {
    const domain = <DomainModel>{
      domain: event.newData.domain,
      dmName: event.newData.dmName,
      dmCode: event.newData.dmCode,
      dmOrder:event.newData.dmOrder,
      selfId: event.newData.selfId,
    };

    this.domainService.edit(event.newData.idDomain, domain).subscribe(
      (data)=>{
        event.confirm.resolve();
      }
    )

  }

  onDelete(event) {}
}
