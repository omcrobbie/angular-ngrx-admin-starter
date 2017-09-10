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
    .switchMap(action => {
      return this.loginService.login(action.payload)
        .map(data => new login.LoginSuccess(data))
        .catch(err => of(new login.HttpFailedAction(err)));
    });

  @Effect({dispatch: false})
  loginSuccess$: Observable<Action> = this.action$
    .ofType(login.LOGIN_SUCCESS)
    .switchMap(action => {
      window.localStorage.setItem(env.userTokenKey, action.payload.token);
      return of();
    });

  @Effect({ dispatch: false })
  logout$: Observable<Action> = this.action$
    .ofType(login.LOGOUT)
    .switchMap(() => {
      window.localStorage.removeItem(env.userTokenKey);
      return of();
    });

  constructor(
    private action$: Actions,
    private loginService: LoginService
  ) { }
}
