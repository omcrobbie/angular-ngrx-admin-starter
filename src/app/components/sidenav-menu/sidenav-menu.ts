// import { ClearCurrentUser } from './../../containers/users/state/users.actions';
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

export class SidenavMenuComponent {
  currentUser$: Observable<any>;
  constructor(private store: Store<fromRoot.State>) {
    // this.currentUser$ = this.store.select(fromRoot.getLoggedinUser);
  }

  logout() {
    this.store.dispatch(new actions.Logout(null));
    // this.store.dispatch(new ClearCurrentUser(null));
  }

  ngOnInit(): void {

  }
}
