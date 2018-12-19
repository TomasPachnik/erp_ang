import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  invoices: any = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.invoices = [];
    this.rest.getInvoices().subscribe((data: {}) => {
      console.log(data);
      this.invoices = data;
    });
  }
}
