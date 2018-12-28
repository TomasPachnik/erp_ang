import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersComponent } from './suppliers.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, SuppliersRoutingModule, PageHeaderModule],
    declarations: [SuppliersComponent]
})
export class SuppliersModule {}
