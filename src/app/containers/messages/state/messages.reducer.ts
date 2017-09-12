import { Action } from '@ngrx/store';

import * as messages from './messages.actions';
import * as login from '../../login/state/login.actions';


export interface State {
  snackBar: string;
  flash: any;
}

export const initialState: State = {
  snackBar: undefined,
  flash: undefined
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case messages.SET_BAR_MESSAGE:
      return Object.assign({}, state, {
        snackBar: action.payload
      });
    case messages.SET_FLASH_MESSAGE:
      return Object.assign({}, state, {
        flash: action.payload
      });
    case messages.CLEAR_MESSAGES:
      return Object.assign({}, state, {
        snackBar: undefined,
        flash: undefined
      });
    case login.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        snackBar: 'Login successful'
      });
      case login.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        snackBar: 'Logout successful'
      });
    case login.LOGIN_FAILED:
      return Object.assign({}, state, {
        snackBar: 'Login was unsuccessful'
      });
    // case DELETE_DOCUMENT_SUCCESS:
    //   return Object.assign({}, state, {
    //     snackBar: "Document removed."
    //   });

    // case SET_MESSAGE:
    //   return Object.assign({}, state, {
    //     [action.payload.type]: action.payload.message
    //   });

    // case UPLOAD_DOCUMENT_FILE_SUCCESS:
    //   return Object.assign({}, state, {
    //     snackBar: "Document uploaded."
    //   });

    // case RUN_JOB_SUCCESS:
    //   return Object.assign({}, state, {
    //     snackBar: "Job running."
    //   });
    // case UPDATE_USER_SUCCESS:
    //   return Object.assign({}, state, {
    //     snackBar: 'User was successfully updated'
    //   });
    // case HTTP_FAILED:
    //   return Object.assign({}, state, {
    //     snackBar: action.payload.message
    //   });

    default:
      return state;
  }
}

export const getFlashMessage = (state: State) => state.flash;
export const getBarMessage = (state: State) => state.snackBar;
