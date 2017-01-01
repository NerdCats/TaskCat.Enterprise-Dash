import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './index';
import { LetterAvatarComponent } from '../shared/letter-avatar/index';

@NgModule({
    declarations: [
        DashboardComponent,
        LetterAvatarComponent
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class DashboardModule {
}
