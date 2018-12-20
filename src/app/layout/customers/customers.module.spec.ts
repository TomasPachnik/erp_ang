import { CustomersModule } from './customers.module';

describe('customersModule', () => {
  let customersModule: CustomersModule;

  beforeEach(() => {
    customersModule = new CustomersModule();
  });

  it('should create an instance', () => {
    expect(CustomersModule).toBeTruthy();
  });
});
