import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE';

export class SidebarToggle implements Action {
    readonly type = SIDEBAR_TOGGLE;
    constructor(public opened: boolean) {}
}

export type Actions
    = SidebarToggle;
