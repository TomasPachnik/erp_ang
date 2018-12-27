import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
      {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
      {path: 'users', loadChildren: './users/users.module#UsersModule'},
      {path: 'users/user-detail/:uuid', loadChildren: './user-detail/user-detail.module#UserDetailModule'},
      {path: 'users/newUser', loadChildren: './user-detail/user-detail.module#UserDetailModule'},
      {path: 'user-settings', loadChildren: './user-settings/user-settings.module#UserSettingsModule'},
      {path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
      {path: 'customers/customer-detail/:uuid', loadChildren: './customer-detail/customer-detail.module#CustomerDetailModule'},
      {path: 'customers/newCustomer', loadChildren: './customer-detail/customer-detail.module#CustomerDetailModule'},
      {path: 'forms', loadChildren: './form/form.module#FormModule'},
      {path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule'},
      {path: 'grid', loadChildren: './grid/grid.module#GridModule'},
      {path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule'},
      {path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
