import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';

const appRoutes: Routes = [
    ...HomeRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
