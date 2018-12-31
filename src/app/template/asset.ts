export class Asset {
  name: string;
  count: string;
  unit: string;
  unitPrice: string;

  constructor(name: string, count: string, unit: string, unitPrice: string) {
    this.name = name;
    this.count = count;
    this.unit = unit;
    this.unitPrice = unitPrice;
  }
}
