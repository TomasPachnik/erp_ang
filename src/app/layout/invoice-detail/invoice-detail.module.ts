import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoiceDetailRoutingModule} from './invoice-detail-routing.module';
import {InvoiceDetailComponent} from './invoice-detail.component';
import {PageHeaderModule} from './../../shared';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, InvoiceDetailRoutingModule, PageHeaderModule, FormsModule, NgbModule],
  declarations: [InvoiceDetailComponent]
})
export class InvoiceDetailModule {
}
