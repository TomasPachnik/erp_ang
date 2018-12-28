import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SuppliersComponent } from './suppliers.component';
import { SuppliersModule } from './suppliers.module';

describe('suppliersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SuppliersModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(SuppliersComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
