import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

  constructor(
    private injector: Injector) {
  }

  handleError(error: Error | HttpErrorResponse) {
    const router = this.injector.get(Router);
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        console.log('No Internet Connection');
      } else {
        localStorage.removeItem('isLoggedin');
        window.location.reload();
      }
    }
  }
}
