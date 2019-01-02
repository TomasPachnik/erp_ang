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
    this.getProducts();
  }

  generateInvoice(uuid) {
    this.rest.generateInvoice(uuid).subscribe((file: Blob) => {
      const filename = "faktura.pdf";
      FileSaver.saveAs(file, filename);
    });

  }

  newInvoice() {
    this.router.navigate(['invoices/newInvoice']);
  }

  getProducts() {
    this.invoices = [];
    this.rest.getInvoices().subscribe((data: {}) => {
      this.invoices = data;
    });
  }
}
