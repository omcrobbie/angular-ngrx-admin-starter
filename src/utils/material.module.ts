import { NgModule } from '@angular/core';
import * as md from '@angular/material';

const modules = [
    md.MdAutocompleteModule,
    md.MdCheckboxModule,
    md.MdDatepickerModule,
    md.MdInputModule,
    md.MdRadioModule,
    md.MdSelectModule,
    md.MdSliderModule,
    md.MdSlideToggleModule,
    md.MdMenuModule,
    md.MdSidenavModule,
    md.MdToolbarModule,
    md.MdListModule,
    md.MdGridListModule,
    md.MdCardModule,
    md.MdTabsModule,
    md.MdButtonModule,
    md.MdButtonToggleModule,
    md.MdChipsModule,
    md.MdIconModule,
    md.MdProgressSpinnerModule,
    md.MdProgressBarModule,
    md.MdDialogModule,
    md.MdTooltipModule,
    md.MdSnackBarModule,
    md.MdTableModule,
    md.MdSortModule,
    md.MdPaginatorModule
];
@NgModule({
    imports: modules,
    exports: modules
})
export class AppMaterialModule { }
