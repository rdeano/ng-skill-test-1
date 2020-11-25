import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  //canActivate(
  //  route: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  return true;
  //}

  constructor(private _authService: AuthService,
    private _router: Router) {

  }

  canActivate(): boolean {
    if (this._authService.loggedInUser()) {
      return true;
    } else {
      this._router.navigateByUrl('/user/login');
      return false;
    }

  }
  
}
