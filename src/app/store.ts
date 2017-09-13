import { createSelector } from 'reselect';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromLogin from './containers/login/state/login.reducer';
import * as fromMessages from './containers/messages/state/messages.reducer';
import * as fromSidebar from './components/sidenav-menu/state/sidebar.reducer';

export interface State {
  login: fromLogin.State;
  router: fromRouter.RouterState;
  messages: fromMessages.State;
  sidebar: fromSidebar.State;
}

const reducers = {
  login: fromLogin.reducer,
  router: fromRouter.routerReducer,
  messages: fromMessages.reducer,
  sidebar: fromSidebar.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: any, action: any) {
  return developmentReducer(state, action);
}
/*
 * States
 *
 */
export const getLoginState = (state: State) => state.login;
export const getMessagesState = (state: State) => state.messages;
export const getSidebarState = (state: State) => state.sidebar;

/**
 * Selectors
 */
export const getLoginLoggedIn = createSelector(getLoginState, fromLogin.loginLoggedIn);
export const getLoginError = createSelector(getLoginState, fromLogin.loginError);
export const getAuthError = createSelector(getLoginState, fromLogin.authError);
export const getLoginUser = createSelector(getLoginState, fromLogin.loginCurrentUser);
// /*
//  * Selectors: Messages
//  *
//  */

export const getFlashMessage = createSelector(getMessagesState, fromMessages.getFlashMessage);
export const getMessagesBarMessages = createSelector(getMessagesState, fromMessages.getBarMessage);

export const getSidebarOpened = createSelector(getSidebarState, fromSidebar.sidebarOpened);
