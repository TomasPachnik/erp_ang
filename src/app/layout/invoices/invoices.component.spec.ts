import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { InvoicesComponent } from './invoices.component';
import { InvoicesModule } from './invoices.module';

describe('InvoicesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ InvoicesModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(InvoicesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
