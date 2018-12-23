import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {RestService} from './../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  users: any = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      this.users = data;
    });
  }

  newUser() {
    this.router.navigate(['users/newUser']);
  }

  removeUser(uuid) {
    if(confirm("Ste si istý?")) {
      this.rest.removeUser(uuid).subscribe((data: {}) => {
        this.getUsers();
      });
    }
  }

}
