import { Component } from '@angular/core';
import { DashboardEventService } from '../dashboard/dashboard-event.service';
import { LoggerService } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'as-glimpse',
    templateUrl: 'glimpse.html'
})
export class GlimpseComponent {
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                    // OR //
                    beginAtZero: true,   // minimum value will be 0.
                    suggestedMax: 100,
                    max: 150
                }
            }]
        }
    };

    public isDataAvailable: boolean = false;
    public barChartLabels: string[] = [];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;
    public barChartData: any[];

    constructor(
        private loggerService: LoggerService,
        private dashboarEventService: DashboardEventService) {
        dashboarEventService.componentUpdated({ Event: 'loaded', Name: 'Glimpse' });
    }
}
