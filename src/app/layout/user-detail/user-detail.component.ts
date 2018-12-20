import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {UserDetail} from './../../template/user-detail';
import {ActivatedRoute, Router} from '@angular/router';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [routerTransition()]
})
export class UserDetailComponent implements OnInit {
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  user: any = new UserDetail("", "", "", "", "");

  ngOnInit() {
    this.getUserDetail();
  }

  getUserDetail() {
    this.rest.getUser(this.route.snapshot.params['uuid']).subscribe((data: {}) => {
      console.log(data);
      this.user = data;
    });
  }

  onSubmit() {
    console.log(this.user);
  }


}
