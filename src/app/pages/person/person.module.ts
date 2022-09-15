import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
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
  ],
  declarations: [
    ...routedComponents,
    SearchPersonComponent,
  ],
})
export class PersonModule { }
