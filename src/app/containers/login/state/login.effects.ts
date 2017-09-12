import { StorageService } from './../../../services/storage.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import * as login from './login.actions';
import { LoginService } from '../login.service';
import { environment as env } from '../../../../environments/environment';

@Injectable()
export class LoginEffects {
  @Effect()
  login$: Observable<Action> = this.action$
    .ofType(login.LOGIN)
    .switchMap((action: login.Login) => {
      return this.loginService.login(action.loginPayload)
        .map(data => {
          this.storageService.setTokenSync(data.token);
          return new login.LoginSuccess(data.user);
        })
        .catch(err => of(new login.LoginFailed(err)));
    });
  @Effect()
  logout$: Observable<Action> = this.action$
    .ofType(login.LOGOUT)
    .switchMap(() => {
      return this.storageService.clearToken()
        .map(() => {
          return new login.LogoutSuccess();
        })
        .catch(err => of(new login.LoginFailed(err)));
    });
  @Effect()
  auth$: Observable<Action> = this.action$
    .ofType(login.AUTH)
    .switchMap((action) => {
      return this.loginService.auth()
        .map((userData) => {
          return new login.AuthSuccess(userData);
        })
        .catch(err => of(new login.AuthFailed(err)));
    });

  constructor(
    private action$: Actions,
    private loginService: LoginService,
    private storageService: StorageService
  ) { }
}
