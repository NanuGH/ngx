import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { StockService } from '../../../service/stock/StockService';

@Component({
  selector: 'button-view',
  template: `
    <div style="text-align: center;">
    <!-- <img  src="assets/images/" hint="img" title="Confirmar Stock" width="35" height="40"> -->
    <button nbButton status="danger">Cancelar</button>
   </div>
    <ng-template #updateEstadoPago let-data let-ref="dialogRef" >
  <nb-card style="width:35em;">
    <nb-card-header class="confirm" style="text-align: center">CONFIRMAÇÃO DO ESTADO DE STOCK</nb-card-header>
    <nb-card-body style="text-align: center">
      Confirmar o Mudanco de Stock <span style="font-weight: bold">{{ data }}</span>
    </nb-card-body>
    <nb-card-footer>
      <button nbButton status="danger" (click)="ref.close()">Cancelar</button>
      <button class="btn-action-modal" style="float: right; margin-left: 20px;" nbButton status="primary" (click)="updateStatusPayment($event)">Confirmar</button>
    </nb-card-footer>
  </nb-card>
</ng-template>
  `,
})

export class ButtonChangeStockComponent implements ViewCell, OnInit {

  status: string;
  dialogRef: NbDialogRef<any>;
  loadAccordion: boolean = false;
  @Input() value: string | number;
  @Input() rowData: any;
  source: LocalDataSource = new LocalDataSource();

  @ViewChild('updateEstadoPago') updateEstadoPago: TemplateRef<any>;
  @Output() selectEdit = new EventEmitter();

  constructor(private stockService: StockService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,

  ) { }

  ngOnInit() { }

  onClick() {
    this.dialogRef = this.dialogService.open(this.updateEstadoPago, { context: this.rowData.collection_number });
  }

  updateStatusPayment(event) {
    if (event) {
      this.stockService.changeStockType(this.rowData.id).subscribe(
        (data: any) => {

          if (data.status) {
            this.dialogRef.close();
            this.selectEdit.emit(event);

            this.toastrService.show("Erro", "Não foi Possivel Actualizar estado do Pagamento", {
              duration: 3000
            });
          } else {

            this.toastrService.show("Erro", "Não foi Possivel Actualizar estado do Stock", {
              duration: 3000,
            });
          }

        },
        (err) => {
          this.toastrService.show("Erro", "Não foi Possivel Actualizar estado do Stock", {
            duration: 3000
          });
          this.loadAccordion = false;
        }
      );
    }
  }


}
