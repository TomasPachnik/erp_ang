import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerDetailModule } from './customer-detail.module';

describe('customer-detailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomerDetailModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CustomerDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
