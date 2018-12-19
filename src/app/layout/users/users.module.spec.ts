import { UsersModule } from './users.module';

describe('usersModule', () => {
  let usersModule: UsersModule;

  beforeEach(() => {
    usersModule = new usersModule();
  });

  it('should create an instance', () => {
    expect(UsersModule).toBeTruthy();
  });
});
