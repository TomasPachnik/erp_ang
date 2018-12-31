import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {InvoiceDetailComponent} from './invoice-detail.component';
import {InvoiceDetailModule} from './invoice-detail.module';

describe('invoice-detailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InvoiceDetailModule, RouterTestingModule],
    })
      .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(InvoiceDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
