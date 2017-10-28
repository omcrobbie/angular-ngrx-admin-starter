import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['navbar.css']
})
export class NavbarComponent implements OnInit {
  @Output() onClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }
  openSidenav() {
    this.onClick.emit();
  }
}
