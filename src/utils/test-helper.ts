import { Store } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import * as fromRoot from '../app/store';
import { By } from '@angular/platform-browser';
export const getTestFixtures = <T>(Component: any, ...elems: any[]): [
    ComponentFixture<T>,
    T,
    DebugElement[],
    Store<fromRoot.State>
] => {
    const fixture: ComponentFixture<T> = TestBed.createComponent(Component);
    const comp: T = fixture.componentInstance;
    const dElems: DebugElement[] = getDebugElements(fixture, ...elems);
    const els = dElems.map( de => de.nativeElement);
    const store = TestBed.get(Store);
    return [fixture, comp, dElems, store];
};

function getDebugElements<T>(fixture: ComponentFixture<T>, ...elems: any[]) {
    let debugElems: DebugElement[] = [];
    for (const elem of elems) {
        if (typeof elem === 'string') {
            debugElems = debugElems.concat(fixture.debugElement.queryAll(By.css(elem)));
        } else {
            debugElems = debugElems.concat(fixture.debugElement.queryAll(By.directive(elem)));
        }
    }
    return debugElems;
}
