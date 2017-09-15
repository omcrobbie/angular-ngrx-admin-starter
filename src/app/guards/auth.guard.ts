import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { StorageService } from './../services/storage.service';
import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import * as fromRoot from '../store';

@Injectable()
export class AuthorizedGuard implements CanActivate {
  private isLoggedIn: boolean;
  private loggedIn$: Observable<any>;
  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.loggedIn$ = this.store.select(fromRoot.getLoginLoggedIn);
    this.loggedIn$.subscribe(loggedIn => this.isLoggedIn = loggedIn);
  }
  canActivate(): boolean {
    return this.isLoggedIn;
  }
}
