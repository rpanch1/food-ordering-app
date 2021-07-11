import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if(this.isLoggedIn()){
        return true;
    }else{
        this._router.navigate(['login']);
    }
  }

  isLoggedIn(): boolean {
    if(localStorage.getItem('userid') == null){
        return false;
    }
    return true;
  }
}
