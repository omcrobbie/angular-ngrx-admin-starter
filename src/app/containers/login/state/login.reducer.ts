import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';

import { logStore } from '../../../../utils/helpers';
import * as actions from './login.actions';

export interface State {
  error: any;
  loggedIn: Boolean;
  currentUser: any;
}

export const initialState: State = {
  error: undefined,
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
        error: action.error
      });

    default:
      return state;
  }
}

export const loginLoggedIn = (state: State) => state.loggedIn;
export const loginError = (state: State) => state.error;
export const loginCurrentUser = (state: State) => state.currentUser;
