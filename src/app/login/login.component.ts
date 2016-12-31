import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth';

@Component({
    moduleId: module.id,
    selector: 'as-login',
    templateUrl: 'login.html'
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    /**
     * Login component for TaskCat.Enterprise Dashboard
     */
    constructor(
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {
        this.authService.logout();
    }

    login() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
