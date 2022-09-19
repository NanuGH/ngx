import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PersonService } from '../../service/person/personService';
import { PagesModule } from '../pages.module';
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
    PagesModule,
    FormsModule,
    PersonRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  entryComponents:[
    SearchComponent
  ],
  providers: [PersonService],
})
export class PersonModule { }
