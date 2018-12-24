import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req;
    if (localStorage.getItem('token') !== null) {
      // @ts-ignore
      authReq = req.clone({
        headers: req.headers.set('Authorization', "Bearer " + localStorage.getItem('token'))
      });
    }
    return next.handle(authReq).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 403) {
            localStorage.setItem('token', null);
            localStorage.setItem('user', null);
            localStorage.setItem('roles', null);
            this.router.navigate(['/']);
          }
        }
      }
    ));
  }

}


