import { StorageService } from './../../services/storage.service';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';
import { LoginEffects } from './state/login.effects';
import { ComponentTestModule, ActionTestModule } from './../../../utils/test.module';
import { RouterStub } from './../../../utils/router-stub';
import { Router } from '@angular/router';
import { getTestFixtures, createServiceStub, IMethodMap, assertFn, makeAssert } from './../../../test-helpers/test-helper';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { ComponentFixture, inject, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LoginComponent } from './login.component';
import { MdInputDirective, MdButton } from '@angular/material';
import * as fromRoot from '../../store';
import * as fromLogin from './state/login.reducer';
import * as actions from './state/login.actions';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import 'rxjs/add/operator/last';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/merge';
import { of } from 'rxjs/observable/of';
import { Actions, EffectsModule, EffectSources } from '@ngrx/effects';
import { TestScheduler } from 'rxjs/testing/testscheduler';



describe('Login', () => {
    describe('Component', () => {
        let comp: LoginComponent;
        let fixture: ComponentFixture<LoginComponent>;
        let button: DebugElement;
        let userField: DebugElement;
        let pwField: DebugElement;
        let store: Store<fromRoot.State>;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    ComponentTestModule
                ],
                declarations: [LoginComponent],
            });
            [fixture, comp, [button, userField, pwField], store] = getTestFixtures<LoginComponent>(LoginComponent, MdButton, 'input');
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
        it('should navigate after dispatch', inject([Router], (router: Router) => {
            spyOn(router, 'navigateByUrl');
            store.dispatch(new actions.LoginSuccess({}));
            expect(router.navigateByUrl).toHaveBeenCalledWith('/');
        }));
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
            tick();
            expect(store.dispatch).toHaveBeenCalledWith(new actions.Login(params));
        }));
    });
    xdescribe('integration', () => {
        let store: Store<fromRoot.State>;
        let fixture: ComponentFixture<LoginComponent>;
        let loginService: jasmine.SpyObj<LoginService>;
        let storageService: jasmine.SpyObj<StorageService>;
        let assert: assertFn;
        // let action: Observable<any>;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    ComponentTestModule,
                    EffectsModule.forRoot([LoginEffects])
                ],
                declarations: [LoginComponent],
                providers: [
                    // provideMockActions(() => action ),
                    {provide: LoginService, useValue: jasmine.createSpyObj('loginService', ['login'])},
                    {provide: StorageService, useValue: jasmine.createSpyObj('storageService', ['setTokenSync'])}
                ]
            });
            fixture = TestBed.createComponent(LoginComponent);
            store = TestBed.get(Store);
            spyOn(store, 'dispatch').and.callThrough();
            assert = makeAssert(store, 'login');
            loginService = TestBed.get(LoginService);
            storageService = TestBed.get(StorageService);
            loginService.login.and.returnValue(of({user: {userName: 'oliver'}, token: '12345'}));
            storageService.setTokenSync.and.returnValue(of(true));
        });
        it('should complete login cycle', inject([Router, LoginEffects], (router: Router, effects: LoginEffects) => {
            effects.login$.subscribe(result => {
                expect(result).toEqual(expected);
                expect(loginService.login).toHaveBeenCalled();
                expect(storageService.setTokenSync).toHaveBeenCalledWith('12345');
            });
            const action = new actions.Login({userName: 'oliver', password: '123'});
            const expected = new actions.LoginSuccess({userName: 'oliver'});
            store.dispatch(action);
        }));
    });
    describe('Actions', () => {
        let store: Store<fromRoot.State>;
        function assert(action: any, state: any) {
            store.select('login').last().subscribe( _state => {
                expect(state).toEqual(_state);
            });
            store.dispatch(action);
        }
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    ActionTestModule
                ]
            });
            store = TestBed.get(Store);
            spyOn(store, 'dispatch').and.callThrough();
        });
        it('LoginSuccess', () => {
            const fixture = {userName: 'oliver'};
            const state = { currentUser: fixture, loggedIn: true};
            const action = new actions.LoginSuccess(fixture);
            assert(action, state);
        });
        it('Logout success', () => {
            const action = new actions.LogoutSuccess();
            const state: any = { currentUser: undefined, loggedIn: false};
            assert(action, state);
        });
        it('AuthSuccess', () => {
            const fixture = {userName: 'oliver'};
            const state = { currentUser: fixture, loggedIn: true};
            const action = new actions.AuthSuccess(fixture);
            assert(action, state);
        });
        xdescribe('marble tests', () => {
            it('play with marbles', async(() => {
                const user = {userName: 'oliver', password: '123'};
                const loginAction = new actions.Login(user);
                const logoutAction = new actions.Logout();
                const loginMarbles = 'x--x';
                const logoutMarbles = '--x--';
                const expectedMarbles = 'a-b-a';
                const login = hot(loginMarbles, {x: loginAction });
                const logout = hot(logoutMarbles, {x: logoutAction});
                const expected = cold(expectedMarbles, {a: loginAction, b: logoutAction});
                const merged = merge(login, logout);
                expect(merged).toBeObservable(expected);
                // tester.expectObservable(store.select('login')).toBe(expectedMarbles, expected);
            }));
        });
    });
    describe('Effects', () => {
        let loginService: jasmine.SpyObj<LoginService>;
        let storageService: jasmine.SpyObj<StorageService>;
        let store: Store<fromRoot.State>;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ ActionTestModule ]
            });
            store = TestBed.get(Store);
            spyOn(store, 'dispatch');
        });
        describe('Success', () => {
            const user = {userName: 'oliver'};
            const token = '12345678';
            beforeEach(() => {
                const loginMap: IMethodMap[] = [
                    {
                        method: 'login',
                        response: {user, token}
                    },
                    {
                        method: 'auth',
                        response: user
                    }
                ];
                const storageMap: IMethodMap[] = [
                    {
                        method: 'setTokenSync',
                        response: true
                    },
                    {
                        method: 'getTokenSync',
                        response: token
                    },
                    {
                        method: 'clearToken',
                        response: true
                    }
                ];
                loginService = createServiceStub<LoginService>(loginMap);
                storageService = createServiceStub<StorageService>(storageMap);
            });
            it('login', () => {
                const source = hot('a', {a: {type: actions.LOGIN}});
                const effect = new LoginEffects(new Actions(source), loginService, storageService);
                const expected = hot('a', {a: new actions.LoginSuccess(user)});
                expect(effect.login$).toBeObservable(expected);
                // store.dispatch(new actions.LoginSuccess(user));
                expect(storageService.setTokenSync).toHaveBeenCalledWith(token);
                // expect(store.dispatch).toHaveBeenCalled();
            });
            it('logout', () => {
                const source = cold('a', {a: new actions.Logout()});
                const effect = new LoginEffects(new Actions(source), loginService, storageService);
                const expected = cold('a', {a: new actions.LogoutSuccess()});
                expect(effect.logout$).toBeObservable(expected);
                expect(storageService.clearToken).toHaveBeenCalled();
            });
            it('auth', () => {
                const source = hot('a', {a: new actions.Auth()});
                const effect = new LoginEffects(new Actions(source), loginService, storageService);
                const expected = hot('a', {a: new actions.AuthSuccess(user)});
                expect(effect.auth$).toBeObservable(expected);
            });
        });
        describe('Failure', () => {
            beforeEach(() => {
                const loginMap: IMethodMap[] = [
                    {
                        method: 'login',
                        response: new Error('test')
                    },
                    {
                        method: 'auth',
                        response: new Error('test')
                    }
                ];
                const storageMap: IMethodMap[] = [
                    {
                        method: 'setTokenSync',
                        response: new Error('test')
                    },
                    {
                        method: 'clearToken',
                        response: new Error('test')
                    }
                ];
                loginService = createServiceStub<LoginService>(loginMap);
                storageService = createServiceStub<StorageService>(storageMap);
            });
            it('login', () => {
                const source = hot('a', {a: {type: actions.LOGIN}});
                const effect = new LoginEffects(new Actions(source), loginService, storageService);
                const expected = hot('a', {a: new actions.LoginFailed('test')});
                expect(effect.login$).toBeObservable(expected);
            });
            it('login when set token fails', () => {
                const loginMap: IMethodMap[] = [
                    {
                        method: 'login',
                        response: {}
                    },
                    {
                        method: 'auth',
                        response: {}
                    }
                ];
                const thisLoginService = createServiceStub<LoginService>(loginMap);
                const source = hot('a', {a: {type: actions.LOGIN}});
                const effect = new LoginEffects(new Actions(source), thisLoginService, storageService);
                const expected = hot('a', {a: new actions.LoginFailed('test')});
                expect(effect.login$).toBeObservable(expected);
            });
            it('logout', () => {
                const source = hot('a', {a: new actions.Logout()});
                const effect = new LoginEffects(new Actions(source), loginService, storageService);
                const expected = hot('a', {a: new actions.LoginFailed('test')});
                expect(effect.logout$).toBeObservable(expected);
            });
        });
    });
});
