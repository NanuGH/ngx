import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { BloodTestService } from '../../service/bloodTest/BloodTestService';

import {routedComponents, TransfusionRoutingModule} from './transfusion-routing.module';


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
    TransfusionRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  entryComponents:[],
  providers: [BloodTestService],
})
export class TransfusionModule { }
