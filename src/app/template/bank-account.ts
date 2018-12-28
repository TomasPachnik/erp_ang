export class BankAccount {
  bankName: string;
  iban: string;

  constructor(bankName: string, iban: string) {
    this.bankName = bankName;
    this.iban = iban;
  }
}
