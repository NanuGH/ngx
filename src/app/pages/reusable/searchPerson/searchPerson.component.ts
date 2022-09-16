import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { TreHelper } from '../../../helpers/helper';
import { SearchPerson } from '../../../models/searchPerson';
import { PersonService } from '../../../service/person/personService';

/*import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { TreHelper } from '../../../helpers/tre-helper';
import { Geografias } from '../../../models/generics/geografias';
import { SearchForeign } from '../../../models/pedidos/interface/searchForeign';*/

@Component({
  selector: 'searchPerson',
  templateUrl: './searchPerson.component.html',
  styleUrls: ['./searchPerson.component.scss']
})
export class SearchPersonComponent implements OnInit {
  searchForm: FormGroup;
  birthday: string;
  nome: string;
  apelido: string;
  nacionalidade: string;
  dataNascimento: Date;
  loadingList: boolean = false;

  @Output() searchFormEvent: EventEmitter<any> = new EventEmitter();
  @Output() loadingSearchEvent: EventEmitter<boolean> = new EventEmitter();


  constructor(private formBuilder: FormBuilder,
    //private estrangeiroService: EstrangeiroService,
    //private pedidoService: PedidoService,
    private personService:PersonService,
    private toastrService: NbToastrService) { }

  ngOnInit() {
    this.loadSearchForm();
    //this.loadAllNationalities(1, "0");
  }

  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }

 /* private loadAllNationalities(nivel: number, self_id: string) {
    this.estrangeiroService.getGeografiaTre(nivel, self_id).subscribe(
      (data: Geografias) => {
        this.nacionalidades = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }*/

  private loadSearchForm() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        name: ["", [Validators.pattern("^(?! )[A-Za-z ' \u00C0-\u00ff]*")]],
        surname: ["", [Validators.pattern("^(?! )[A-Za-z ' \u00C0-\u00ff]*")]],
        /*dm_doc_ident: "",
        birthdate: [
          "",
          [
            Validators.pattern(
              "^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$"
            ),
          ],
        ],*/
      }, { validators: this.checkValidForm }),
    });
  }

  clearSearch() {
    this.searchForm.reset();
    this.loadSearchForm();
  }

  onSearchFormSubmit() {
    this.loadingSearchEvent.emit(true);
    this.convertFormToModel();
  }

  checkValidForm: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    let controls = control.controls;
    if (controls) {
      let theOne = Object.keys(controls).findIndex(key => controls[key].value !== '');
      if (theOne === -1) {
        return {
          atLeastOneRequired: {
            text: 'Pelo menos 1 campo deve estar preenchido.'
          }
        }
      }
    };
  }

  private convertFormToModel() {
    const viewModelObject = <SearchPerson>{
      namePerson: this.searchGroup.get("name").value,
      surnamePerson: this.searchGroup.get("surname").value
      //dm_doc_ident: this.searchGroup.get("dm_doc_ident").value,
      //birthDate: this.searchGroup.get("birthdate").value,
    };
    TreHelper.removeProperty(viewModelObject);
    this.searchPerson(viewModelObject);
  }

  private searchPerson(viewModelObject: SearchPerson) {
    const body = JSON.parse(JSON.stringify(viewModelObject));
    this.personService.getPersonMultipleParams(body).subscribe((data: any) => {
      console.log(data);
      this.treatResultOfDataList(data);
      this.loadingSearchEvent.emit(false);
    },
      (err: any) => {
        /*this.showNotification(
          "Não Foi Possivel Carregar os Dados",
          "Erro",
        );*/
        console.log("erro");

      }
    );
  }



  private treatResultOfDataList(data: any) {
    if (data.status) {
      this.searchFormEvent.emit(data.details);
    }
  }


  /*private showNotification(
    data: String,
    title: String,
    ToastStatus: NbToastStatus
  ) {
    this.toastrService.show(data, title, {
      duration: 4000,
      status: ToastStatus,
    });
  }*/
}
