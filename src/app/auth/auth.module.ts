import { NgModule } from '@angular/core';
import { AuthConstants, AuthGuard, AuthService} from './index';

@NgModule({
    providers: [
        AuthService
    ],
    exports: [
        AuthConstants,
        AuthGuard,
        AuthService
    ]
})
export class AuthModule {}
