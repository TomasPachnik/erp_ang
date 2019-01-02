import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Invoice} from "../../template/invoice";
import {Legal} from "../../template/legal";
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {InvoiceExport} from "../../template/invoice-export";
import {Asset} from "../../template/asset";

@Component({
  selector: 'app-invoices',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss'],
  animations: [routerTransition()]
})
export class InvoiceDetailComponent implements OnInit {
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router, private calendar: NgbCalendar) {
  }

  invoice: any = new Invoice("", "", "€", "", "", "");
  suppliers: any[];
  customers: any[];

  ngOnInit() {
    this.getCustomers();
    this.getSuppliers();
    if (this.route.snapshot.params['uuid'] !== undefined) {
      this.getInvoiceDetail();
    }
  }

  getSuppliers() {
    this.rest.getSuppliers().subscribe((data: []) => {
      this.suppliers = data;
      if (this.suppliers.length > 0) {
        this.invoice.supplier = this.suppliers[0].uuid;
      }
    });
  }

  getCustomers() {
    this.rest.getCustomers().subscribe((data: []) => {
      this.customers = data;
      if (this.customers.length > 0) {
        this.invoice.customer = this.customers[0].uuid;
      }
    });
  }


  getInvoiceDetail() {
    /*this.rest.getInvoice(this.route.snapshot.params['uuid']).subscribe((data: {}) => {
      this.invoice = data;
    });*/
  }

  onSubmit() {

    let asset = new Asset(this.invoice.assetName, this.invoice.assetCount, this.invoice.assetUnit, this.invoice.assetUnitPrice);
    let assets = [asset];

    let invoice = new InvoiceExport(
      this.invoice.name,
      this.invoice.invoiceNumber,
      this.invoice.supplierVariableSymbol,
      this.invoice.currency,
      this.invoice.customer,
      this.invoice.supplier,
      this.mapDate(this.invoice.dateOfIssue),
      this.mapDate(this.invoice.deliveryDate),
      this.mapDate(this.invoice.dueDate),
      assets,
      this.invoice.note);

    console.log(invoice);

    this.rest.updateInvoice(invoice).subscribe((data: {}) => {
      this.router.navigate(['invoices']);
    });
  }

  mapDate(date) {
    let result = date.year + "";
    result += "-";
    if (date.month < 10) {
      result += "0";
    }
    result += date.month;
    result += "-";
    if (date.day < 10) {
      result += "0";
    }
    result += date.day;
    return result;
  }

}
