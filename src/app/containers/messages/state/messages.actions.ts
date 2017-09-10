import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

export const SET_MESSAGE = 'SET_MESSAGE';

export class SetMessage implements Action {
  readonly type = SET_MESSAGE;
  constructor(public payload: any) {}
}

export type Actions
    = SetMessage;
