import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  imports: [MatDialogModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: '/node_modules/bootstrap/dist/css/bootstrap.css'
})
export class ErrorDialogComponent {
  data = inject(MAT_DIALOG_DATA);
}
