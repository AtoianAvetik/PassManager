import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( private $auth: AuthService,
                 public router: Router ) {
    }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        if ( this.$auth.isLoggedIn !== true ) {
            this.router.navigate( ['sign-in'] );
        }
        return true;
    }
}
