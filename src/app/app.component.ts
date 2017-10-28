import { SidebarToggle } from './state/app.actions';
import { Router } from '@angular/router';
import { ClearMessages, SetFlashMessage } from './containers/messages/state/messages.actions';
import { Auth } from './containers/login/state/login.actions';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './store';
import * as actions from '../app/containers/login/state/login.actions';

import { MatSnackBar, MatSidenav } from '@angular/material';
import { environment as env } from '../environments/environment';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
@AutoUnsubscribe()
export class AppComponent implements OnInit {
  authErr$: Observable<any>;
  barMessage$: Observable<any>;
  flashMessage$: Observable<any>;
  authSub: Subscription;
  flashSub: Subscription;
  barSub: Subscription;
  sidebarSub: Subscription;
  sidebar$: Observable<any>;
  @ViewChild('sidenav') sideBar: MatSidenav;

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    private flashMessages: FlashMessagesService,
    private store: Store<fromRoot.State>,
  ) {
    this.barMessage$ = this.store.select(fromRoot.getMessagesBarMessages);
    this.flashMessage$ = this.store.select(fromRoot.getFlashMessage);
    this.authErr$ = this.store.select(fromRoot.getAuthError);
    this.sidebar$ = this.store.select(fromRoot.getSidebarOpened);
  }

  ngOnInit(): void {
    this.store.dispatch(new actions.Auth());
    this.barSub = this.barMessage$.filter( m => !!m).subscribe(message => {
        this.snackBar.open(message, null, {
          duration: 3000,
        });
        this.store.dispatch(new ClearMessages());
    });
    this.authSub = this.authErr$.filter( m => !!m).subscribe(err => {
        this.router.navigateByUrl('/login');
    });
    this.sidebarSub = this.sidebar$.subscribe(state => {
      if (state) {
        this.sideBar.open();
      } else {
        this.sideBar.close();
      }
    });
  }
  openSidebar() {
    this.store.dispatch(new SidebarToggle(true));
  }
  closeSidebar() {
    this.store.dispatch(new SidebarToggle(false));
  }
}
