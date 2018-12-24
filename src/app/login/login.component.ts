import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {routerTransition} from '../router.animations';
import {FormsModule} from '@angular/forms';
import {Credentials} from "../template/credentials";
import {RestService} from "../rest.service";
import {Auth} from '../template/auth';
import {UsernameRoles} from "../template/username-roles";
import {UserDetail} from "../template/user-detail";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  constructor(
    public rest: RestService,
    private translate: TranslateService,
    public router: Router
  ) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
  }

  credentials: any = new Credentials("", "");
  errorMessage: string = null;

  ngOnInit() {
  }

  onSubmit() {
    this.rest.signIn(this.credentials).subscribe((data: Auth) => {
        this.errorMessage = null;
        if (data.token !== undefined) {
          localStorage.setItem('token', data.token);
          this.rest.me(this.credentials).subscribe((me: UsernameRoles) => {
            this.rest.getUserByToken().subscribe((user: UserDetail) => {
              localStorage.setItem('user', JSON.stringify(user));
              localStorage.setItem('roles', JSON.stringify(me.roles));
              this.router.navigate(['/']);
            });
          });
        }
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }
}
