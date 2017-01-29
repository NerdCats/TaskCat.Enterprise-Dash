import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { LocalStorage } from '../shared';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthConstants } from './auth.constants';
import { JwtHelper } from 'angular2-jwt';
import { CONSTANTS } from '../shared/index';

@Injectable()
export class AuthService {
    /**
     * Authentication service for enterprise dashboard
     */
    constructor(private http: Http, private localStorage: LocalStorage, private jwtHelper: JwtHelper) { }

    login(username: string, password: string) {
        let headers = new Headers();
        let tokenUrl = CONSTANTS.ENV.API_BASE + 'auth/token'; // TODO: Need to definitely load from settings

        let urlEncodedParam =
            'grant_type=' + 'password' +
            '&username=' + username +
            '&password=' + password +
            '&client_id=' + 'GoFetchDevWebApp'; // TODO: We need to load this from either environment or settings somewhere.

        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(tokenUrl, urlEncodedParam, { headers })
            .map((res: Response) => {
                if (res.status < 200 || res.status >= 300) {
                    throw new Error('Response status: ' + res.status);
                }
                return this._extractAndSaveAuthData(res);
            })
            .catch((error: Response) => {
                return this._extractAuthError(error);
            });
    }

    logout() {
        localStorage.removeItem(AuthConstants.AUTH_TOKEN_KEY);
    }

    private _extractAndSaveAuthData(res: Response) {
        let data = res.json();
        if (!data) {
            throw new Error('Invalid/blank auth data, Fatal Error');
        }
        try {
            let userData = this.jwtHelper.decodeToken(data.access_token);
            /**
             * Making sure the user is allowed to get in. Currently this dashboard
             * is only for enterprise users. This would essentially be extended
             * so the components our aware of User types and can act accordingly.
             **/
            let roleString: String = userData.role;

            if (roleString.indexOf('Enterprise') === -1) {
                return false;
            }

            data.userData = userData;
            this.localStorage.setObject(AuthConstants.AUTH_TOKEN_KEY, data);
        } catch (ex) {
            throw new Error('Fatal error, failed to parse token');
        }
        return true;
    }

    private _extractAuthError(res: Response) {
        let error = res.json();
        let errorMsg = error.error_description || 'Server error';
        console.error(errorMsg);
        return Observable.throw(errorMsg);
    }
}
