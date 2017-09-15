import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../../../app.routing-module';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../../../utils/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login.component';
import { MdInputDirective } from '@angular/material';
import * as fromLogin from '../state/login.reducer';
export const setup = (): [
    ComponentFixture<LoginComponent>,
    LoginComponent,
    DebugElement,
    HTMLElement,
    Store<fromLogin.State>
] => {
    TestBed.configureTestingModule({
        imports: [
            AppMaterialModule,
            FormsModule,
            NoopAnimationsModule,
            StoreModule.forRoot({
                login: combineReducers(fromLogin.reducer)
            })
        ],
        declarations: [LoginComponent],
        schemas: [NO_ERRORS_SCHEMA]
    });
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;
    const de = fixture.debugElement.query(By.directive(MdInputDirective));
    const el = de.nativeElement;
    const store = TestBed.get(Store);
    return [fixture, comp, de, el, store];
};
