import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { DashboardService } from '../dashboard.service';
import * as dashboard from './dashboard.actions';

@Injectable()
export class DashboardEffects {
  constructor(
    private action$: Actions,
    private dashboardService: DashboardService
  ) { }
}
