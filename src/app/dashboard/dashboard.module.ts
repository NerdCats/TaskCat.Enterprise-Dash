import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../navbar/index';
import { LetterAvatarModule } from '../shared/letter-avatar/index';

import { DashboardComponent } from './index';
import { SidebarComponent } from '../sidebar/index';
import { FooterComponent } from '../footer/index';

@NgModule({
    declarations: [
        DashboardComponent,
        SidebarComponent,
        FooterComponent
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        NavbarModule,
        LetterAvatarModule
    ]
})
export class DashboardModule {
}
