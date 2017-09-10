import { Component, OnInit, Input } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['navbar.css']
})

export class NavbarComponent implements OnInit {
  @Input() menu: MdSidenav;

  constructor() {}

  toggleSidenav(sidenav: MdSidenav): void {
    sidenav.toggle();
  }

  ngOnInit(): void {}
}
