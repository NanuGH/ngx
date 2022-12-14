import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'person',
      loadChildren: () => import('./person/person.module')
        .then(m => m.PersonModule),
    },
    {
      path: 'employee',
      loadChildren: () => import('./employee/employee.module')
        .then(m => m.EmployeeModule),
    },
    {
      path: 'blood-collection',
      loadChildren: () => import('./blood-collection/bloodCollect.module')
        .then(m => m.BloodCollectModule),
    },
    {
      path: 'blood-donner',
      loadChildren: () => import('./blood-donner/bloodDonner.module')
        .then(m => m.BloodDonnerModule),
    },
    {
      path: 'bloodtype',
      loadChildren: () => import('./bloodtype/bloodtype.module')
        .then(m => m.BloodtypeModule),
    },
    {
      path: 'stock',
      loadChildren: () => import('./stock/stock.module')
        .then(m => m.StockModule),
    },
    {
      path: 'stockPronto',
      loadChildren: () => import('./stockPronto/stockp.module')
        .then(m => m.StockpModule),
    },
    {
      path: 'transfusion',
      loadChildren: () => import('./transfusion/transfusion.module')
        .then(m => m.TransfusionModule),
    },
    {
      path: 'sample',
      loadChildren: () => import('./sample/sample.module')
        .then(m => m.SampleModule),
    },
    {
      path: 'bloodTest',
      loadChildren: () => import('./bloodTest/bloodTest.module')
        .then(m => m.BloodTestModule),
    },

    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
