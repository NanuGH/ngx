import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { TreHelper } from '../../../helpers/helper';
import { SearchPerson } from '../../../models/request/searchPerson';
import { PersonService } from '../../../service/person/personService';


@Component({
  selector: 'messageConfirmcomponent',
  templateUrl: './messageConfirm.component.html',
  styleUrls: ['./messageConfirm.component.scss']
})
export class MessageConfirmComponent implements OnInit {

  @ViewChild('dialogDelete') dialogDelete: TemplateRef<any>;
  dialogRef: NbDialogRef<any>;
  idPerson:string;

  constructor(
    private personService: PersonService,
    private dialogService: NbDialogService
  ) {
  }

  ngOnInit(): void {
  }


  public onDeleteConfirm() {

    this.personService.changeStatus(this.idPerson).subscribe(
      (data: any) => {
        console.log(data);
        this.dialogRef.close();
      }
    );


}



}
