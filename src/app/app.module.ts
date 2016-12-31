import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HomeModule,
        LoginModule,
        routing
    ],
    providers: [APP_PROVIDERS, appRoutingProviders, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
