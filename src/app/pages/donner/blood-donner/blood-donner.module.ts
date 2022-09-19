import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodonnerRoutingModule, routedComponents } from './bloodonner-routing.module';
import { PagesModule } from '../../pages.module';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../../@theme/theme.module';
import { BloodDonnerComponent } from './blood-donner.component';



@NgModule({
  imports: [
    //CommonModule,
    NbCardModule,
    NbButtonModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    PagesModule,
    FormsModule,
    BloodonnerRoutingModule,
  ],
  declarations: [
    BloodDonnerComponent,
    ...routedComponents,
  ],
})
export class BloodDonnerModule { }
