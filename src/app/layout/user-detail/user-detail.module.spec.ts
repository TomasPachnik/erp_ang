import {UserDetailModule} from './user-detail.module';

describe('UserDetailModule', () => {
  let userDetailModule: UserDetailModule;

  beforeEach(() => {
    userDetailModule = new UserDetailModule();
  });

  it('should create an instance', () => {
    expect(UserDetailModule).toBeTruthy();
  });
});
