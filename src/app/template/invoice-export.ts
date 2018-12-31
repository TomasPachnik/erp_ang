import {Asset} from "./asset";

export class InvoiceExport {

  name: string;
  invoiceNumber: string;
  supplierVariableSymbol: string;
  currency: string;
  customer: string;
  supplier: string;
  dateOfissue: string;
  deliveryDate: string;
  dueDate: string;
  assets: Asset[];


  constructor(name: string, invoiceNumber: string, supplierVariableSymbol: string, currency: string, customer: string, supplier: string, dateOfissue: string, deliveryDate: string, dueDate: string, assets: Asset[]) {
    this.name = name;
    this.invoiceNumber = invoiceNumber;
    this.supplierVariableSymbol = supplierVariableSymbol;
    this.currency = currency;
    this.customer = customer;
    this.supplier = supplier;
    this.dateOfissue = dateOfissue;
    this.deliveryDate = deliveryDate;
    this.dueDate = dueDate;
    this.assets = assets;
  }
}
