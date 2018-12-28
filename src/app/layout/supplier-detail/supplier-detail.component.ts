import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {Legal} from '../../template/legal';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-suppliers',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss'],
  animations: [routerTransition()]
})
export class SupplierDetailComponent implements OnInit {
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  supplier: any = new Legal("", "", "",
    "", "", "", "", "", "", "");

  ngOnInit() {
    if (this.route.snapshot.params['uuid'] !== undefined) {
      this.getSupplierDetail();
    }
  }

  getSupplierDetail() {
    this.rest.getCustomer(this.route.snapshot.params['uuid']).subscribe((data: {}) => {
      this.supplier = data;
    });
  }

  onSubmit() {
    this.rest.updateSupplier(this.supplier).subscribe((data: {}) => {
      this.router.navigate(['suppliers']);
    });
  }


}
