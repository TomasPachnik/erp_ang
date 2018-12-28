import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierDetailComponent } from './supplier-detail.component';

const routes: Routes = [
    {
        path: '', component: SupplierDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupplierDetailRoutingModule {
}
