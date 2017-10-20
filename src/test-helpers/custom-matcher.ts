import { Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
declare const jasmine: any;
// This approach was outlined here:
// https://blog.thoughtram.io/angular/2016/12/27/angular-2-advance-testing-with-custom-matchers.html
declare const global: any;
const jasmineExpect = (typeof window === 'undefined' ? global : window).expect;

export const expectDispatch:
    <T>(actual: {actions: Actions, store: Store<T>, dispatch: Action}) =>
        DispatchMatcher<T> = jasmineExpect;

export interface DispatchMatcher<T> extends jasmine.Matchers<T> {
    toEmit(...expected: Array<Action|[Action, T]>): boolean;
}

export const customJasmineMatchers: jasmine.CustomMatcherFactories = {
    toEmit: (util, customEqualityTesters) => {
        return {
            compare: <T>(
                actual: {actions: Actions, store: Store<T>, dispatch: Action},
                ...expected: Array<Action|[Action, T]>) => {

                const verify = [...expected];
                const result = {
                    message: 'success',
                    pass: true,
                };
                const subscription = actual.actions
                    .withLatestFrom(actual.store)
                    .subscribe(([action, state]) => {
                        const value = verify.shift();
                        if (value === undefined) {
                            result.pass = false;
                            result.message = 'extra values were emitted';
                        }
                        if (result.pass) {
                            const actualValue = Array.isArray(value)
                                ? [action, state] : action;
                            result.pass = util.equals(actualValue, value);
                            if (!result.pass) {
                                result.message =
                                    util.buildFailureMessage(
                                        'to equal', false, actualValue, value);
                            }
                        }
                    });
                actual.store.dispatch(actual.dispatch);
                subscription.unsubscribe();
                if (result.pass && verify.length !== 0) {
                    result.pass = false;
                    result.message = 'not all values were emitted, ' +
                        `expected ${expected.length}, ` +
                        `got ${expected.length - verify.length}`;
                }

                return result;
            },
        };
    },
};