import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomersComponent } from './customers.component';
import { CustomersModule } from './customers.module';

describe('customersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomersModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CustomersComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
