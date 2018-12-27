import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  animations: [routerTransition()]
})
export class CustomersComponent implements OnInit {
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  customers: any = [];

  ngOnInit() {
    this.getCustomers();
  }

  newCustomer() {
    this.router.navigate(['customers/newCustomer']);
  }

  removeCustomer(uuid){
    if(confirm("Ste si istý?")) {
      this.rest.removeCustomer(uuid).subscribe((data: {}) => {
        this.getCustomers();
      });
    }
  }

  getCustomers() {
    this.customers = [];
    this.rest.getCustomers().subscribe((data: {}) => {
      this.customers = data;
    });
  }

}
