import { Go } from './../../../utils/router-actions';
import { ConfirmationService } from './../../services/confirmation.service';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';

import * as actions from '../../containers/login/state/login.actions';
import * as fromRoot from '../../store';
@Component({
  selector: 'sidenav-menu',
  templateUrl: './sidenav-menu.html',
  styleUrls: ['sidenav-menu.css']
})

  export class SidenavMenuComponent implements OnInit, OnDestroy {
  loggedIn$: Observable<any>;
  currentUser$: Observable<any>;
  constructor(private store: Store<fromRoot.State>,
    private confirmation: ConfirmationService
  ) {
    this.currentUser$ = this.store.select(fromRoot.getLoginUser);
    this.loggedIn$ = this.store.select(fromRoot.getLoginLoggedIn);
  }

  logout() {
    this.confirmation.create(() => {
      this.store.dispatch(new actions.Logout());
      this.store.dispatch(new Go({ path: ['/login']}));
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
