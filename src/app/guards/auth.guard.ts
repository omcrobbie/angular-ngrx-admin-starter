import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthorizedGuard implements CanActivate {
  constructor(
    // private usersService: UsersService,
    private router: Router
  ) {}

  canActivate(): boolean {
    return true;
    // if (this.usersService.isLoggedIn()) {
    //   return true;
    // } else {
    //   this.router.navigate(["/login"]);
    //   return true;
    // }
  }
}
