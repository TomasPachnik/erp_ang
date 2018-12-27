export class Address {
  street: string;
  houseNumber: string;
  postalCode: string;
  town: string;
  country: string;

  constructor(street: string, houseNumber: string, postalCode: string, town: string, country: string) {
    this.street = street;
    this.houseNumber = houseNumber;
    this.postalCode = postalCode;
    this.town = town;
    this.country = country;
  }
}
