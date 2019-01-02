import {Asset} from "./asset";

export class InvoiceExport {

  name: string;
  invoiceNumber: string;
  supplierVariableSymbol: string;
  currency: string;
  customer: string;
  supplier: string;
  dateOfIssue: string;
  deliveryDate: string;
  dueDate: string;
  assets: Asset[];
  note: string;

  constructor(name: string, invoiceNumber: string, supplierVariableSymbol: string, currency: string, customer: string, supplier: string, dateOfIssue: string, deliveryDate: string, dueDate: string, assets: Asset[], note: string) {
    this.name = name;
    this.invoiceNumber = invoiceNumber;
    this.supplierVariableSymbol = supplierVariableSymbol;
    this.currency = currency;
    this.customer = customer;
    this.supplier = supplier;
    this.dateOfIssue = dateOfIssue;
    this.deliveryDate = deliveryDate;
    this.dueDate = dueDate;
    this.assets = assets;
    this.note = note;
  }
}
