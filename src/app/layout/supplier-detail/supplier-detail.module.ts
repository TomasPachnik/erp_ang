import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupplierDetailRoutingModule} from './supplier-detail-routing.module';
import {SupplierDetailComponent} from './supplier-detail.component';
import {PageHeaderModule} from './../../shared';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, SupplierDetailRoutingModule, PageHeaderModule, FormsModule],
  declarations: [SupplierDetailComponent]
})
export class SupplierDetailModule {
}
