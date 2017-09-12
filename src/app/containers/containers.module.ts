import { LoginService } from './login/login.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from './../../utils/material.module';

import { ComponentsModule } from './../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    DashboardComponent,
    LoginComponent,
  ],
  providers: [
    AppMaterialModule
  ]
})

export class ContainersModule {}
