import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserSettingsComponent } from './user-settings.component';
import { UserSettingsModule } from './user-settings.module';

describe('user-settingsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UserSettingsModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(UserSettingsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
