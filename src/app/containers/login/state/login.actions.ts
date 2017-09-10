import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const HTTP_FAILED = 'HTTP_FAILED';
export const RESET_LOGIN_STATE = 'RESET_LOGIN_STATE';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload: any) {}
}

export class HttpFailedAction implements Action {
  readonly type = HTTP_FAILED;
  constructor(public payload: any) {}
}

export class ResetLoginState implements Action {
  readonly type = RESET_LOGIN_STATE;
  constructor(public payload: any) {}
}

export class SetLoggedIn implements Action {
  readonly type = SET_LOGGED_IN;
  constructor(public payload: any) {}
}

export type Actions
    = Login
    | LoginSuccess
    | Logout
    | HttpFailedAction
    | ResetLoginState
    | SetLoggedIn;
