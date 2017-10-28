import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as sidebar from './app.actions';
import * as login from '../containers/login/state/login.actions';

export interface State {
    opened: boolean;
}
export const initialState: State = {
    opened: false
};
export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case sidebar.SIDEBAR_TOGGLE:
            return Object.assign({}, state, {
                opened: (action as sidebar.SidebarToggle).opened
            });
        // case login.LOGIN_SUCCESS:
        //     return Object.assign({}, state, {
        //         opened: true
        //     });
        case login.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                opened: false
            });
        default:
            return state;
    }
}
export const sidebarOpened = (state: State) => state.opened;
