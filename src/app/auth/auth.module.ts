import { NgModule } from '@angular/core';
import { AuthConstants, AuthGuard, AuthService} from './index';

@NgModule({
    providers: [
        AuthService,
        AuthConstants,
        AuthGuard
    ]
})
export class AuthModule {}
