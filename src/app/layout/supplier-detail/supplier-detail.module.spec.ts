import {SupplierDetailModule} from './supplier-detail.module';

describe('SupplierDetailModule', () => {
  let supplierDetailModule: SupplierDetailModule;

  beforeEach(() => {
    supplierDetailModule = new SupplierDetailModule();
  });

  it('should create an instance', () => {
    expect(SupplierDetailModule).toBeTruthy();
  });
});
