import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UserDetail} from './../../template/user-detail';
import {Password} from './../../template/password';
import {UsernameRoles} from "../../template/username-roles";

@Component({
  selector: 'app-users',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
  animations: [routerTransition()]
})
export class UserSettingsComponent implements OnInit {
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  user: any = new UserDetail("", "", "", "", "");
  password: any = new Password("", "", "");

  ngOnInit() {
    this.rest.getUserByToken().subscribe((data: UserDetail) => {
      this.user = data;
    });
  }

  onSubmit() {
    console.log(this.user);
  }

  onPassSubmit() {
    this.rest.changePassword(this.password).subscribe((data: {}) => {
      console.log(data);
    });
  }

}
