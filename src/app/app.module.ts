import { StorageService } from './services/storage.service';
import { LoginService } from './containers/login/login.service';
import { SocketService } from './services/socket.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { ComponentsModule } from './components/components.module';
import { NavbarComponent } from './components/navbar/navbar';
import { ContainersModule } from './containers/containers.module';
import { LoginEffects } from './containers/login/state/login.effects';
import { AppMaterialModule } from './../utils/material.module';
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';

import { httpFactory } from './services/http.factory';
import { AuthorizedGuard } from './guards/auth.guard';
import { reducer } from './store';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    ContainersModule,
    ComponentsModule,
    EffectsModule.run(LoginEffects),
    FormsModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterStoreModule.connectRouter(),
    LocalStorageModule.withConfig({
      prefix: 'ngApp', // change this as needed
      storageType: 'localStorage'
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthorizedGuard,
    StorageService,
    SocketService,
    LoginService,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [ XHRBackend, RequestOptions ]
    },
  ]
})

export class AppModule { }
