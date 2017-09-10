import { Action } from '@ngrx/store';

import { SET_MESSAGE } from './messages.actions';


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
    // case DELETE_TEMPLATE_SUCCESS:
    //   return Object.assign({}, state, {
    //     snackBar: "Template removed."
    //   });

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
