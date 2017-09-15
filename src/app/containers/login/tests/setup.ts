import { StoreModule, provideStore, Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../../../utils/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login.component';
import { MdInputDirective } from '@angular/material';
import { reducer } from '../../../store';
import { MockStore } from './mock-store';
export const setup = (): [
    ComponentFixture<LoginComponent>,
    LoginComponent,
    DebugElement,
    HTMLElement
] => {
    TestBed.configureTestingModule({
        imports: [
            AppMaterialModule,
            FormsModule,
            NoopAnimationsModule,
            StoreModule.provideStore(reducer)
        ],
        declarations: [LoginComponent],
        // providers: [
        //     {
        //         provide: Store,
        //         useClass: MockStore
        //     }
        // ],
        schemas: [NO_ERRORS_SCHEMA]
    });
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;
    const de = fixture.debugElement.query(By.directive(MdInputDirective));
    const el = de.nativeElement;
    return [fixture, comp, de, el];
};
