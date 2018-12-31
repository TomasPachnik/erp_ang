import {Address} from "./address";
import {BankAccount} from "./bank-account";

export class Legal {
  uuid: string;
  name: string;
  companyIdentificationNumber: string;
  taxIdentificationNumber: string;
  address: Address;
  bankAccount: BankAccount;

  constructor(name: string, companyIdentificationNumber: string, taxIdentificationNumber: string, street: string, houseNumber: string, postalCode: string, town: string, country: string, bankName: string, iban: string) {
    this.name = name;
    this.companyIdentificationNumber = companyIdentificationNumber;
    this.taxIdentificationNumber = taxIdentificationNumber;
    this.address = new Address(street, houseNumber, postalCode, town, country);
    this.bankAccount = new BankAccount(bankName, iban);
  }
}
