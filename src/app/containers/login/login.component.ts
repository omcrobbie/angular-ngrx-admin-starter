import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as fromRoot from '../../store';
import * as actions from "./state/login.actions";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['login.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  login$: Observable<any>;
  loaded$:  Observable<any>;
  loading$:  Observable<any>;
  loggedIn$: Observable<any>;
  password: string;
  userName: string;
  sub: Subscription;

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
    this.loading$ = this.store.select(fromRoot.getLoginLoading);
    this.loggedIn$ = this.store.select(fromRoot.getLoginLoggedIn);
  }

  login(): void {
    this.store.dispatch(new actions.Login({
      userName: this.userName,
      password: this.password
    }));
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
