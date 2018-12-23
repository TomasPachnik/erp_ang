import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserSettingsRoutingModule} from './user-settings-routing.module';
import {UserSettingsComponent} from './user-settings.component';
import {PageHeaderModule} from './../../shared';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, UserSettingsRoutingModule, PageHeaderModule, FormsModule],
  declarations: [UserSettingsComponent]
})
export class UserSettingsModule {
}
