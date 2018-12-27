import {CustomerDetailModule} from './customer-detail.module';

describe('CustomerDetailModule', () => {
  let customerDetailModule: CustomerDetailModule;

  beforeEach(() => {
    customerDetailModule = new CustomerDetailModule();
  });

  it('should create an instance', () => {
    expect(CustomerDetailModule).toBeTruthy();
  });
});
