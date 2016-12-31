import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'as-dashboard',
    inputs: ['pageTitle', 'pageSubtitle'],
    templateUrl: 'dashboard.html'
})
export class DashboardComponent {
}
