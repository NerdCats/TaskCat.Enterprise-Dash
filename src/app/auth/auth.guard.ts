import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthConstants } from './auth.constants';

@Injectable()
export class AuthGuard implements CanActivate {

    /**
     * AuthGuard should block components from loading if authentication denies so
     */
    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem(AuthConstants.AUTH_TOKEN_KEY)) {
            return true;
        }

        this.router.navigate(['/login']);
    }
}
