import { Component } from '@angular/core';
import { LocalStorage } from '../shared/index';
import { AuthConstants } from '../auth/index';
import { CONSTANTS } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'as-dashboard',
    inputs: ['pageTitle', 'pageSubtitle'],
    templateUrl: 'dashboard.html'
})
export class DashboardComponent {
    public avatarData: any = {
        size: 40,
        background: '#008d4c', // by default it will produce dynamic colors
        fontColor: '#FFFFFF',
        isSquare: false,
        fixedColor: true
    };

    public userInfo: any = {};

    public productInfo: { platform_title: string; product_title: string };

    /**
     * Dashborad container component for TaskCat.Enterprise
     */
    constructor(private localStorage: LocalStorage) {
        let userToken = localStorage.getObject(AuthConstants.AUTH_TOKEN_KEY);
        this.avatarData.text = userToken.userData.sub;
        this.userInfo.Name = userToken.userData.sub;
        this.userInfo.Email = userToken.email;

        this.productInfo = {
            platform_title: CONSTANTS.MAIN.APP.PLATFORM_TITLE,
            product_title: CONSTANTS.MAIN.APP.PRODUCT_TITLE
        };
    }
}
