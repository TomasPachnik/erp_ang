import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Invoice} from "../../template/invoice";
import {Legal} from "../../template/legal";
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

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
    console.log(this.invoice);
    /* this.rest.updateInvoice(this.invoice).subscribe((data: {}) => {
       this.router.navigate(['invoices']);
     });*/
  }

}
