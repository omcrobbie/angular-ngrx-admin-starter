import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { LoginComponent } from './containers/login/login.component';

import { AuthorizedGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthorizedGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { useHash: true }
    )
  ],
  exports: [RouterModule],
  providers: [AuthorizedGuard]
})
export class AppRoutingModule { }
