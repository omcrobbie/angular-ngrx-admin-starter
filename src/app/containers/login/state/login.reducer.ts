import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';

// import { logStore } from '../../../../utils/helpers';
import * as actions from './login.actions';

export interface State {
  loginError: any;
  authError: any;
  loggedIn: Boolean;
  currentUser: any;
}

export const initialState: State = {
  loginError: undefined,
  authError: undefined,
  loggedIn: false,
  currentUser: undefined
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.AUTH_SUCCESS:
    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        currentUser: action.currentUser,
        loggedIn: true
      });
    case actions.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        currentUser: undefined,
        loggedIn: false
      });
    case actions.LOGIN_FAILED:
      return Object.assign({}, state, {
        loginError: action.error
      });
    case actions.AUTH_FAILED:
      return Object.assign({}, state, {
        authError: action.error
      });

    default:
      return state;
  }
}

export const loginLoggedIn = (state: State) => state.loggedIn;
export const loginError = (state: State) => state.loginError;
export const authError = (state: State) => state.authError;
export const loginCurrentUser = (state: State) => state.currentUser;
