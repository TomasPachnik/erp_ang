import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  animations: [routerTransition()]
})
export class SuppliersComponent implements OnInit {
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  suppliers: any = [];

  ngOnInit() {
    this.getSuppliers();
  }

  newSupplier() {
    this.router.navigate(['suppliers/newSupplier']);
  }

  removeSupplier(uuid){
    if(confirm("Ste si istý?")) {
      this.rest.removeSupplier(uuid).subscribe((data: {}) => {
        this.getSuppliers();
      });
    }
  }

  getSuppliers() {
    this.suppliers = [];
    this.rest.getSuppliers().subscribe((data: {}) => {
      this.suppliers = data;
    });
  }

}
