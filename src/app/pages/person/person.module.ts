import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PersonService } from '../../service/person/personService';
import { SearchPersonComponent } from '../reusable/searchPerson/searchPerson.component';

import { PersonRoutingModule,routedComponents} from './person-routing.module';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    PersonRoutingModule,
    Ng2SmartTableModule,

    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    ...routedComponents,
    SearchPersonComponent,
  ],
  providers: [PersonService],
})
export class PersonModule { }
