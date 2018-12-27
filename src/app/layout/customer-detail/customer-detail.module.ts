import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerDetailRoutingModule} from './customer-detail-routing.module';
import {CustomerDetailComponent} from './customer-detail.component';
import {PageHeaderModule} from './../../shared';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, CustomerDetailRoutingModule, PageHeaderModule, FormsModule],
  declarations: [CustomerDetailComponent]
})
export class CustomerDetailModule {
}
