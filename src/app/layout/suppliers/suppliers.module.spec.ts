import { SuppliersModule } from './suppliers.module';

describe('suppliersModule', () => {
  let suppliersModule: SuppliersModule;

  beforeEach(() => {
    suppliersModule = new SuppliersModule();
  });

  it('should create an instance', () => {
    expect(SuppliersModule).toBeTruthy();
  });
});
