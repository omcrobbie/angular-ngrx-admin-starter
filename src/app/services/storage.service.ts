import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class StorageService {
    tokenKey = 'token';
    constructor(public localStorage: LocalStorageService) { }
    isLoggedInSync() {
        return !!this.getTokenSync();
    }
    getTokenSync() {
        return this.localStorage.get(this.tokenKey);
    }
    setTokenSync(token: string) {
        return this.tryCatch(this.localStorage.set, this.tokenKey, token);
    }
    clearToken() {
        return this.tryCatch(this.localStorage.remove, this.tokenKey);
    }
    private tryCatch(fn: Function, ...args: any[]) {
        try {
            const result = fn.call(this, args);
            return of(result);
        } catch (err) {
            return Observable.throw(err);
        }
    }
}
