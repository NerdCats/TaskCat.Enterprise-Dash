import { NgModule } from '@angular/core';
import { LoginComponent } from './index';
import { AuthModule } from '../auth/auth.module';

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
export class LoginModule { }
