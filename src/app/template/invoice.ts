
export class Invoice {
  name: string;
  invoiceNumber: string;
  currency: string;
  customer: string;
  supplier: string;
  supplierVariableSymbol: string;

  constructor(name: string, invoiceNumber: string, currency: string, customer: string, supplier: string, supplierVariableSymbol: string) {
    this.name = name;
    this.invoiceNumber = invoiceNumber;
    this.currency = currency;
    this.customer = customer;
    this.supplier = supplier;
    this.supplierVariableSymbol = supplierVariableSymbol;
  }
}
