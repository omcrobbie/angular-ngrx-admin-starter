import { StoreModule, provideStore } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './../../../utils/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';
import { MdInputDirective } from '@angular/material';
import { reducer } from '../../store';
describe('LoginComponent', () => {
    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppMaterialModule,
                FormsModule,
                NoopAnimationsModule,
                StoreModule.provideStore(reducer)
            ],
            declarations: [LoginComponent]
        });
        fixture = TestBed.createComponent(LoginComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.directive(MdInputDirective));
        el = de.nativeElement;
    });
    it('should exist', () => {
        fixture.detectChanges();
        expect(el).toBeTruthy();
    });
});
