import { Auth } from './containers/login/state/login.actions';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './store';
import * as actions from '../app/containers/login/state/login.actions';

import { MdSnackBar } from '@angular/material';
import { environment as env } from '../environments/environment';
import { go } from '@ngrx/router-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent implements OnInit {
  loggedInErr$: Observable<any>;
  message$: Observable<any>;

  constructor(
    public snackBar: MdSnackBar,
    private store: Store<fromRoot.State>
  ) {
    this.message$ = this.store.select('messages');
    this.loggedInErr$ = this.store.select(fromRoot.getLoginError);
    this.message$.subscribe(data => {
      // if (data.snackBar) {
      //   this.snackBar.open(data.snackBar, null, {
      //     duration: 3000,
      //   });
      // }
    });
    this.loggedInErr$.subscribe(err => {
      if (err) {
        this.store.dispatch(new actions.Logout());
        this.store.dispatch(go(['/login']));
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new actions.Auth());
  }
}
