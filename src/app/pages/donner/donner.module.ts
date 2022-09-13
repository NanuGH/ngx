import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { DonnerRoutingModule,routedComponents} from './donner-routing.module';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    DonnerRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents
  ],
})
export class DonnerModule { }
