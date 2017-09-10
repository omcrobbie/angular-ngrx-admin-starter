import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './store';

import { MdSnackBar } from '@angular/material';
import { environment as env } from '../environments/environment';
import { SetLoggedIn } from './containers/login/state/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent implements OnInit {
  isUserLoggedInSub: Subscription;
  loggedIn$: Observable<any>;
  message$: Observable<any>;
  messageSub: any;

  constructor(
    private router: Router,
    public snackBar: MdSnackBar,
    private store: Store<fromRoot.State>
  ) {
    this.message$ = this.store.select('messages');
    this.messageSub = this.message$.subscribe(data => {
      // if (data.snackBar) {
      //   this.snackBar.open(data.snackBar, null, {
      //     duration: 3000,
      //   });
      // }
    });
    this.loggedIn$ = this.store.select(fromRoot.getLoginLoggedIn);
  }

  ngOnInit(): void {
    const token = window.localStorage.getItem(env.userTokenKey);
    this.store.dispatch(new SetLoggedIn(token));

    this.isUserLoggedInSub = this.loggedIn$.subscribe(loggedIn => {
      if (!loggedIn) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }
}
