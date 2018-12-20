export class UserDetail {
  uuid: string;
  name: string;
  login: string;
  email: string;
  phone: string;

  constructor(uuid: string, name: string, login: string, email: string, phone: string) {
    this.uuid = uuid;
    this.name = name;
    this.login = login;
    this.email = email;
    this.phone = phone;
  }
}
