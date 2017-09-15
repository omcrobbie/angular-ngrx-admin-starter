import { MockStore } from './mock-store';
import { Store } from '@ngrx/store';
import { setup } from './setup';
import { ComponentFixture, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LoginComponent } from '../login.component';
import { MdInputDirective } from '@angular/material';
import * as fromRoot from '../../../store';

describe('LoginComponent', () => {
    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    beforeEach(() => {
        [fixture, comp, de, el] = setup();
    });
    // beforeEach(inject([Store], (store: MockStore<fromRoot.State>) => {
    //     store.nextMock({
    //         loggedIn: true
    //     }, 'login');
    // }));
    it('should exist', () => {
        fixture.detectChanges();
        expect(el).toBeTruthy();
    });
});
