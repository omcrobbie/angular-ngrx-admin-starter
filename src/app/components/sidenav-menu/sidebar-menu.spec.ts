import { SidebarToggle } from './state/sidebar.actions';
import { By } from '@angular/platform-browser';
import { ConfirmationService } from './../../services/confirmation.service';
import { SidenavMenuComponent } from './sidenav-menu';
import { NavbarComponent } from './../navbar/navbar';
import { LoginSuccess, LogoutSuccess } from './../../containers/login/state/login.actions';
import { Store } from '@ngrx/store';
import { DebugElement, Component } from '@angular/core';
import { ActionTestModule, ComponentTestModule } from './../../../utils/test.module';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import * as fromRoot from '../../store';
import { makeAssert, assertFn, getTestFixtures } from '../../../utils/test-helper';
describe('Sidebar menu', () => {
    describe('actions', () => {
        let store: Store<fromRoot.State>;
        let assert: assertFn;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ActionTestModule]
            });
            store = TestBed.get(Store);
            assert = makeAssert(store, 'sidebar');
            // spyOn(store, 'dispatch').and.callThrough();
        });
        it('should open on login', () => {
            const action = new LoginSuccess({});
            const state = { opened: true};
            assert(action, state);
        });
        it('should close on logout', () => {
            const action = new LogoutSuccess();
            const state = { opened: false };
            assert(action, state);
        });
    });
    describe('component', () => {
        let fixture: ComponentFixture<SidenavMenuComponent>;
        let userElem: DebugElement;
        let text: HTMLHeadingElement;
        let store: Store<fromRoot.State>;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ComponentTestModule],
                declarations: [
                    SidenavMenuComponent
                ],
                providers: [
                    {provide: ConfirmationService, useValue: {}}
                ]
            });
        fixture = TestBed.createComponent(SidenavMenuComponent);
        store = TestBed.get(Store);
        });
        it('should exist', () => {
            expect(fixture).toBeTruthy();
        });
        it('should display the correct user', () => {
            store.dispatch(new LoginSuccess({userName: 'Oliver'}));
            fixture.detectChanges();
            userElem = fixture.debugElement.query(By.css('.current-user'));
            text =  userElem.nativeElement;
            expect(text.innerText).toBe('Hello, Oliver');
        });
        it('should display a message when loggedout', () => {
            store.dispatch(new LogoutSuccess());
            fixture.detectChanges();
            userElem = fixture.debugElement.query(By.css('h3'));
            text =  userElem.nativeElement;
            expect(text.innerText).toBe('Please login');
        });
    });
});
