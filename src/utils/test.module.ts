import { RouterStub } from './router-stub';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './material.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as fromRoot from '../app/store';

@NgModule({
    imports: [
        AppMaterialModule,
        FormsModule,
        NoopAnimationsModule,
        StoreModule.forRoot(fromRoot.reducer)
    ],
    exports: [
        AppMaterialModule,
        FormsModule,
        NoopAnimationsModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        { provide: Router, useClass: RouterStub }
    ]
})
export class ComponentTestModule { }
@NgModule({
    imports: [
        StoreModule.forRoot(fromRoot.reducer)
    ],
    providers: [
        { provide: Router, useClass: RouterStub }
    ]
})
export class ActionTestModule { }
