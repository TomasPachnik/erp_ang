import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, InvoicesRoutingModule, PageHeaderModule],
    declarations: [InvoicesComponent]
})
export class InvoicesModule {}
