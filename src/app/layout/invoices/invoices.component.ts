import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
  animations: [routerTransition()]
})
export class InvoicesComponent implements OnInit {
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  invoices: any = [];

  ngOnInit() {
    this.getInvoices();
  }

  generateInvoice(uuid) {
    this.rest.generateInvoice(uuid).subscribe((file: Blob) => {
      const filename = "faktura.pdf";
      FileSaver.saveAs(file, filename);
    });
  }

  removeInvoice(uuid) {
    if (confirm("Ste si istý?")) {
      this.rest.removeInvoice(uuid).subscribe((data: {}) => {
        this.getInvoices();
      });
    }
  }

  newInvoice() {
    this.router.navigate(['invoices/newInvoice']);
  }

  getInvoices() {
    this.invoices = [];
    this.rest.getInvoices().subscribe((data: {}) => {
      this.invoices = data;
    });
  }
}
