import { SetFlashMessage } from './../messages/state/messages.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as fromRoot from '../../store';
import * as actions from './state/login.actions';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['login.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  loggedIn$: Observable<any>;
  password: string;
  userName: string;
  sub: Subscription;

  constructor(
    private route: Router,
    private store: Store<fromRoot.State>
  ) {
    this.loggedIn$ = this.store.select(fromRoot.getLoginLoggedIn);
  }

  login(): void {
    const payload: actions.LoginPayload = {
      userName: this.userName,
      password: this.password
    };
    this.store.dispatch(new actions.Login(payload));
  }

  ngOnInit(): void {
    this.sub = this.loggedIn$.subscribe(loggedIn => {
      if (loggedIn) {
        this.route.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
