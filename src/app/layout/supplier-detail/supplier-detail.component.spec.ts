import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SupplierDetailComponent } from './supplier-detail.component';
import { SupplierDetailModule } from './supplier-detail.module';

describe('supplier-detailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SupplierDetailModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(SupplierDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
