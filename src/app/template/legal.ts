import {Address} from "./address";

export class Legal {
  name: string;
  companyIdentificationNumber: string;
  taxIdentificationNumber: string;
  address: Address;

  constructor(name: string, companyIdentificationNumber: string, taxIdentificationNumber: string, street: string, houseNumber: string, postalCode: string, town: string, country: string) {
    this.name = name;
    this.companyIdentificationNumber = companyIdentificationNumber;
    this.taxIdentificationNumber = taxIdentificationNumber;
    this.address = new Address(street, houseNumber, postalCode, town, country);
  }
}
