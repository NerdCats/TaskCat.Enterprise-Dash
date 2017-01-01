import { NgModule } from '@angular/core';
import { LoginComponent, LoginRoute } from './index';
import { AuthModule, AuthGuard } from '../auth/index';

@NgModule({
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        AuthModule
    ]
})
export class LoginModule {
    /**
     * TaskCat Enterprise dashboard login module
     */
    constructor(private authGuard: AuthGuard) {
        authGuard.loginRoute = LoginRoute.path;
    }
}
