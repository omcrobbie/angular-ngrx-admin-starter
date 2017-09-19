import { RouterStub } from './../../../utils/router-stub';
import { Router } from '@angular/router';
import { getTestFixtures } from './../../../utils/test-helper';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './../../../utils/material.module';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { ComponentFixture, inject, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { MdInputDirective, MdButton } from '@angular/material';
import * as fromRoot from '../../store';
import * as actions from './state/login.actions';

describe('LoginComponent', () => {
    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let button: DebugElement;
    let userField: DebugElement;
    let pwField: DebugElement;
    let store: Store<fromRoot.State>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppMaterialModule,
                FormsModule,
                NoopAnimationsModule,
                StoreModule.forRoot(fromRoot.reducer)
            ],
            declarations: [LoginComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: Router, useClass: RouterStub }
            ]
        });
        [fixture, comp, [button, userField, pwField], store] = getTestFixtures(LoginComponent, MdButton, 'input');
        spyOn(store, 'dispatch').and.callThrough();
        fixture.detectChanges();
    });
    it('should exist', () => {
        fixture.detectChanges();
        expect(store).toBeTruthy();
    });
    it('should dispatch action on click', () => {
        const action = new actions.Login({ userName: undefined, password: undefined });
        button.triggerEventHandler('click', null);
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });
    it('should dispatch with correct params', fakeAsync(() => {
        const params = { userName: 'user', password: 'pw123' };
        const userIn: HTMLInputElement = userField.nativeElement;
        const psIn: HTMLInputElement = pwField.nativeElement;
        userIn.value = params.userName;
        psIn.value = params.password;
        psIn.dispatchEvent(new Event('input'));
        tick();
        userIn.dispatchEvent(new Event('input'));
        tick();
        button.triggerEventHandler('click', null);
        expect(store.dispatch).toHaveBeenCalledWith(new actions.Login(params));
    }));
    it('should navigate after dispatch', inject([Router], (router: Router) => {
        const spy = spyOn(router, 'navigateByUrl');
        store.dispatch(new actions.LoginSuccess({}));
        expect(spy.calls.first().args[0]).toBe('/');
    }));
});
