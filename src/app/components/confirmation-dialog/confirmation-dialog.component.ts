import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'confirmation',
    templateUrl: 'confirmation-dialog.html',
    styleUrls: ['./confirmation-dialog.css']
})

export class ConfirmationDialogComponent implements OnInit {
    header: string;
    question: string;
    confirmLabel: string;
    cancelLabel: string;
    constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
        this.header = data.header;
        this.question = data.question;
        this.confirmLabel = data.confirmLabel;
        this.cancelLabel = data.cancelLabel;
    }

    ngOnInit() { }
}
