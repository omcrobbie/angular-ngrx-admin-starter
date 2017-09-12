import { Component, OnInit, Input } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['navbar.css']
})

export class NavbarComponent implements OnInit {
  @Input() menu: MdSidenav;
  appName = environment.appName;

  constructor() {}

  toggleSidenav(sidenav: MdSidenav): void {
    sidenav.toggle();
  }

  ngOnInit(): void {}
}
