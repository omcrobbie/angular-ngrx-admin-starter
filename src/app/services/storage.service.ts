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
        return this.localStorage.set(this.tokenKey, token);
    }
    clearToken() {
        return of(this.localStorage.remove(this.tokenKey));
    }
}
