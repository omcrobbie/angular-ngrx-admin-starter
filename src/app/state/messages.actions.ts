import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

export const SET_BAR_MESSAGE = 'SET_BAR_MESSAGE';
export const SET_FLASH_MESSAGE = 'SET_FLASH_MESSAGE';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export class SetBarMessage implements Action {
  readonly type = SET_BAR_MESSAGE;
  constructor(public payload: any) {}
}
export class SetFlashMessage implements Action {
  readonly type = SET_FLASH_MESSAGE;
  constructor(public payload: any) {}
}
export class ClearMessages implements Action {
  readonly type = CLEAR_MESSAGES;
}

export type Actions
    = SetBarMessage
    | SetFlashMessage
    | ClearMessages;
