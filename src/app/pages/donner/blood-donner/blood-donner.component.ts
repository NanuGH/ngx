import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { DonnerService } from '../../../service/blood-donnner/DonnerService';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './blood-donner.component.html',
  styleUrls: ['./blood-donner.component.scss'],
})
export class BloodDonnerComponent implements OnInit{

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private donnerService: DonnerService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit(): void {
    this.getDonner();
  }

    settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
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
      },
    };



  getDonner(){
    this.donnerService.getDonner().subscribe(
      (data: any) => {

        this.source.load(data.details[0]);
        console.log(data.details);
      },
      (err) => {}
    );
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
