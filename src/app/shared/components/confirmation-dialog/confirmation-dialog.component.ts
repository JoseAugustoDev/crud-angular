import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatDialogActions, MatDialogContent],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: '/node_modules/bootstrap/dist/css/bootstrap.css'
})
export class ConfirmationDialogComponent {
onCancel() {
throw new Error('Method not implemented.');
}

  constructor (
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  onConfirm(result: boolean): void {
    this.dialogRef.close(result);
  }
}
