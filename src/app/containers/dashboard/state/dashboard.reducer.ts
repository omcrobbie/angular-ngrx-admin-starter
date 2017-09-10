import { createSelector } from 'reselect';
import * as dashboard from './dashboard.actions';

export interface State {
  message: string;
  remoteMessage: string;
}

export const initialState: State = {
  message: '',
  remoteMessage: ''
};

export function reducer(state = initialState, action: dashboard.Actions): State {
  switch (action.type) {
    default:
      return state;
  }
}
