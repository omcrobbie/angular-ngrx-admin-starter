import { ConfirmationDialogComponent } from './../components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/first';

@Injectable()
export class ConfirmationService {
    confirmationDialog: MatDialogRef<ConfirmationDialogComponent>;
    constructor(private dialog: MatDialog) { }

    create(
        callback: Function,
        header: string = 'Confirmation',
        question: string = 'Are you sure?',
        confirmLabel: string = 'OK',
        cancelLabel: string = 'Cancel'
    ) {
        const data = {header, question, confirmLabel, cancelLabel};
        this.confirmationDialog = this.dialog.open(ConfirmationDialogComponent, {data});
        this.confirmationDialog.afterClosed().first().subscribe(proceed => {
            if (proceed) {
                callback();
            }
        });
    }
}
