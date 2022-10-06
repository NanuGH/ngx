import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { TreHelper } from '../../../helpers/helper';
import { SearchPerson } from '../../../models/request/searchPerson';


@Component({
  selector: 'searchPersoncomponent',
  templateUrl: './searchPerson.component.html',
  styleUrls: ['./searchPerson.component.scss']
})
export class SearchPersonComponent implements OnInit {
  searchForm: FormGroup;
  sendAddEvent: Boolean =false;

  disableFormSearch:boolean=true;
  @Output() searchFormEvent: EventEmitter<any> = new EventEmitter();
  @Output() loadingSearchEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.loadSearchForm();
  }


  convertFormToModel() {
    var viewModelObject = <SearchPerson>{
      namePerson: this.searchGroup.get("namePerson").value,
      surnamePerson: this.searchGroup.get("surnamePerson").value,
      birthday: this.searchGroup.get("birthday").value,
    };

    TreHelper.removeProperty(viewModelObject);
    this.searchFormEvent.emit(viewModelObject);
  }

  public get searchGroup(): FormGroup {
    return this.searchForm.get("search") as FormGroup;
  }

  loadSearchForm() {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.group({
        namePerson: [""],
        surnamePerson: [""],
        birthday: ["2022-09-08"]
      }),
    });
  }

  onSearchFormSubmit() {
    this.convertFormToModel();
    //this.loadingSearchEvent.emit(true);
  }

  clearSearch(){
    this.searchForm.reset();
  }

}
