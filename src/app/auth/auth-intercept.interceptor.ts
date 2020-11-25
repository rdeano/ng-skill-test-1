import { Injectable } from '@angular/core';
import { tap, finalize, catchError } from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    if (localStorage.getItem("usertoken") != null) {
      const clonedreq = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + localStorage.getItem('usertoken'))
      })

      return next.handle(clonedreq).pipe(tap(
        succ => {

        },
        err => {
          this.router.navigateByUrl('/user/login')
        }
      ))

    }

    return next.handle(request);
  }
}
