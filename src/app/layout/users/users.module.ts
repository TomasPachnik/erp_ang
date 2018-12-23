import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {PageHeaderModule} from './../../shared';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, UsersRoutingModule, PageHeaderModule, FormsModule],
  declarations: [UsersComponent]
})
export class UsersModule {
}
