import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { LoginRoutes } from './login/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...LoginRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
