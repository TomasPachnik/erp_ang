import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, CustomersRoutingModule, PageHeaderModule],
    declarations: [CustomersComponent]
})
export class CustomersModule {}
