import { Store } from '@ngrx/store';
import { setup } from './setup';
import { ComponentFixture, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LoginComponent } from '../login.component';
import { MdInputDirective } from '@angular/material';
import * as fromLogin from '../state/login.reducer';

describe('LoginComponent', () => {
    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let store: Store<fromLogin.State>;
    beforeEach(() => {
        [fixture, comp, de, el, store] = setup();
        spyOn(store, 'dispatch').and.callThrough();
    });
    it('should exist', () => {
        fixture.detectChanges();
        expect(el).toBeTruthy();
        expect(store).toBeTruthy();
    });
});
