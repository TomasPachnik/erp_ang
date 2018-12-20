import { UsersModule } from './users.module';

describe('usersModule', () => {
  let usersModule: UsersModule;

  beforeEach(() => {
    usersModule = new UsersModule();
  });

  it('should create an instance', () => {
    expect(UsersModule).toBeTruthy();
  });
});
