import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserDetailComponent } from './user-detail.component';
import { UserDetailModule } from './user-detail.module';

describe('user-detailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UserDetailModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(UserDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
