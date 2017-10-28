import { NgModule } from '@angular/core';
import * as md from '@angular/material';

const modules = [
    md.MatAutocompleteModule,
    md.MatCheckboxModule,
    md.MatDatepickerModule,
    md.MatInputModule,
    md.MatRadioModule,
    md.MatSelectModule,
    md.MatSliderModule,
    md.MatSlideToggleModule,
    md.MatMenuModule,
    md.MatSidenavModule,
    md.MatToolbarModule,
    md.MatListModule,
    md.MatGridListModule,
    md.MatCardModule,
    md.MatTabsModule,
    md.MatButtonModule,
    md.MatButtonToggleModule,
    md.MatChipsModule,
    md.MatIconModule,
    md.MatProgressSpinnerModule,
    md.MatProgressBarModule,
    md.MatDialogModule,
    md.MatTooltipModule,
    md.MatSnackBarModule,
    md.MatTableModule,
    md.MatSortModule,
    md.MatPaginatorModule
];
@NgModule({
    imports: modules,
    exports: modules
})
export class AppMaterialModule { }
