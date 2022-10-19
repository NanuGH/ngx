import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbSpinnerModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { EmployeeService } from '../../service/employee/employeeService';
import { BloodtypeRoutingModule, routedComponents } from './bloodtype-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    ThemeModule,
    Ng2SmartTableModule,
    BloodtypeRoutingModule,
    NbSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  exports: [],
  entryComponents:[],
  providers: [EmployeeService],
})
export class BloodtypeModule { }
