import { createSelector } from 'reselect';
import { Action } from "@ngrx/store";

import { logStore } from '../../../../utils/helpers';
import * as actions from './login.actions';

export interface State {
  error: any;
  loading: Boolean;
  loggedIn: Boolean;
  currentUser: any;
}

export const initialState: State = {
  error: undefined,
  loading: false,
  loggedIn: false,
  currentUser: undefined
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOGIN:
      return Object.assign({}, state, {
        loading: true
      });

    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        loggedIn: true
      });

    case actions.LOGOUT:
      return Object.assign({}, state, initialState);

    case actions.RESET_LOGIN_STATE:
      return Object.assign({}, initialState);

    case actions.SET_LOGGED_IN:
      return Object.assign({}, state, {
        loggedIn: action.payload || false
      });

    case actions.HTTP_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false
      });

    default:
      return state;
  }
}

export const loginLoading = (state: State) => state.loading;
export const loginLoggedIn = (state: State) => state.loggedIn;
export const loginError = (state: State) => state.error;
export const loginCurrentUser = (state: State) => state.currentUser;
