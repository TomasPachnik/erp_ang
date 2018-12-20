import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserDetailRoutingModule} from './user-detail-routing.module';
import {UserDetailComponent} from './user-detail.component';
import {PageHeaderModule} from './../../shared';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [CommonModule, UserDetailRoutingModule, PageHeaderModule, FormsModule],
  declarations: [UserDetailComponent]
})
export class UserDetailModule {
}
