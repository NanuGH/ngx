import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { EmployeeService } from '../../service/employee/employeeService';
import { EmployeeRoutingModule, routedComponents } from './employee-routing.module';

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
    EmployeeRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  exports: [

  ],
  entryComponents:[

  ],
  providers: [EmployeeService],
})
export class EmployeeModule { }
