import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class UnauthGuard implements CanActivate {

    constructor(private $auth: AuthService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.$auth.isLoggedIn) {
            this.router.navigate(['/']);
        }
        return true;
    }
}
