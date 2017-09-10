import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './../../utils/material.module';

import { ActionCardComponent } from './action-card/action-card';
import { NavbarComponent } from './navbar/navbar';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu';

const components = [
  ActionCardComponent,
  NavbarComponent,
  SidenavMenuComponent,
];

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: components,
  exports: components,
  entryComponents: [
  ]
})

export class ComponentsModule {}
