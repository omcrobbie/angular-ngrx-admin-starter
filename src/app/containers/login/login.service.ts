import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment as env } from '../../../environments/environment';

@Injectable()
export class LoginService {
  loginUrl = '/users/login';
  authUrl = '/users/auth';

  constructor(private http: Http) {}

  login(payload: any) {
    return this.http.post(this.loginUrl, payload)
      .map(res => res.json());
  }
  auth() {
    return this.http.post(this.authUrl, null)
      .map(res => res.json());
  }
}
