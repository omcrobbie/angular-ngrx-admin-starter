import { SidebarToggle } from './../sidenav-menu/state/sidebar.actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { environment } from '../../../environments/environment';
import * as fromRoot from '../../store';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['navbar.css']
})
@AutoUnsubscribe()
export class NavbarComponent implements OnInit {
  @Input() menu: MatSidenav;
  sidebar$: Observable<any>;
  sidebarSub: Subscription;
  sideBarOpen = false;
  appName = environment.appName;

  constructor(private store: Store<fromRoot.State>) {
    this.sidebar$ = this.store.select(fromRoot.getSidebarOpened);
  }

  toggleSidenav(): void {
    this.sideBarOpen = !this.sideBarOpen;
    this.store.dispatch(new SidebarToggle(this.sideBarOpen));
  }

  ngOnInit(): void {
    this.sidebarSub = this.sidebar$.subscribe(state => {
      if (state) {
        this.menu.open();
      } else {
        this.menu.close();
      }
    });
  }
}
