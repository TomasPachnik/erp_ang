import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {routerTransition} from '../router.animations';
import {FormsModule} from '@angular/forms';
import {Credentials} from "../template/credentials";
import {RestService} from "../rest.service";
import {Auth} from '../template/auth';

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

  ngOnInit() {
  }

  onSubmit() {
    this.rest.signIn(this.credentials).subscribe((data: Auth) => {
      console.log(data);

      if (data.token === undefined) {
        console.log("wrong username/password");
      } else {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      }
    });

  }
}
