import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

export interface LoginPayload {
  userName: string;
  password: string;
}
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const AUTH = 'AUTH';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export class Login implements Action {
  readonly type = LOGIN;
  constructor(public loginPayload: LoginPayload) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public currentUser: any) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor() {}
}
export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
  constructor() {}
}

export class LoginFailed implements Action {
  readonly type = LOGIN_FAILED;
  constructor(public error: any) {}
}
export class Auth implements Action {
  readonly type = AUTH;
  constructor() {}
}
export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;
  constructor(public currentUser: any) {}
}
export class AuthFailed implements Action {
  readonly type = AUTH_FAILED;
  constructor(public error: any) {}
}


export type Actions
    = Login
    | LoginSuccess
    | Logout
    | LogoutSuccess
    | Auth
    | AuthSuccess
    | AuthFailed
    | LoginFailed;

