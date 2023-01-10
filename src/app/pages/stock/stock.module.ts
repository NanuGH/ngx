import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonService } from '../../service/person/personService';
import { ButtonChangeStockComponent } from './ButtonUpdatePayment/ButtonChangeStockComponent';

import { StockRoutingModule,routedComponents} from './stock-routing.module';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    FormsModule,
    StockRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  entryComponents:[
    ButtonChangeStockComponent,
  ],
  providers: [PersonService],
})
export class StockModule { }
