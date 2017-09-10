import { Component, Input } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'action-card',
  templateUrl: './action-card.html',
  styleUrls: ['./action-card.css']
})

export class ActionCardComponent {
  @Input() page: string;

  constructor(private router: Router) {}

  navigateTo(): void {
    if (this.page) {
      this.router.navigate([`/${this.page}`]);
    }
  }
}
