import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

export const TEST = 'TEST';
export const REMOTE_TEST = 'REMOTE_TEST';
export const REMOTE_TEST_SUCCESS = 'REMOTE_TEST_SUCCESS';
export const HTTP_FAILED = 'HTTP_FAILED';

export class TestAction implements Action {
  readonly type = TEST;
  constructor(public payload: string) {}
}

export class RemoteTestAction implements Action {
  readonly type = REMOTE_TEST;
}

export class RemoteTestSuccess implements Action {
  readonly type = REMOTE_TEST_SUCCESS;
  constructor(public payload: string) {}
}

export class HttpFailedAction implements Action {
  readonly type = HTTP_FAILED;
  constructor(public payload: any) {}
}

export type Actions
    = TestAction
    | RemoteTestAction
    | RemoteTestSuccess
    | HttpFailedAction;
