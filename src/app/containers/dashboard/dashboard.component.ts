import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../store';

import { SetMessage } from '../messages/state/messages.actions';
// import { IFlashMessage } from '../../models/flash-message';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})

export class DashboardComponent implements OnInit {
  flashMessage$: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>,
    public dialog: MdDialog) {
  }

  ngOnInit(): void {
    // this.store.dispatch(new SetMessage({
    //   type: "flash",
    //   message: {
    //     color: "primary",
    //     icon: "info",
    //     text: "This message can bet set from anywhere"
    //   }
    // }));
  }
}
