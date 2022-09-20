import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonService } from '../../service/person/personService';
import { SearchComponent } from '../reusable/searchPerson/search.component';

import { PersonRoutingModule,routedComponents} from './person-routing.module';


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
    PersonRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    SearchComponent
  ],
  entryComponents:[

  ],
  providers: [PersonService],
})
export class PersonModule { }
