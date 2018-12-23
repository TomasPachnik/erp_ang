export class Password {
  oldPassword: string;
  newPassword: string;
  newPasswordAgain: string;

  constructor(oldPassword: string, newPassword: string, newPasswordAgain: string) {
    this.oldPassword = oldPassword;
    this.newPassword = newPassword;
    this.newPasswordAgain = newPasswordAgain;
  }
}
