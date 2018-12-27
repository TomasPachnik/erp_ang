import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {Customer} from './../../template/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
  animations: [routerTransition()]
})
export class CustomerDetailComponent implements OnInit {
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  customer = new Customer("", "", "", "", "", "", "", "");

  ngOnInit() {
    if (this.route.snapshot.params['uuid'] !== undefined) {
      this.getCustomerDetail();
    }
  }

  getCustomerDetail() {
    this.rest.getCustomer(this.route.snapshot.params['uuid']).subscribe((data: {}) => {
      this.customer = data;
    });
  }

  onSubmit() {
    this.rest.updateCustomer(this.customer).subscribe((data: {}) => {
      this.router.navigate(['customers']);
    });
  }


}
