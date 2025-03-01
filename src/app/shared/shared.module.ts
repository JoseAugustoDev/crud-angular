import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorDialogComponent,
    CategoryPipe
  ],
  exports: [ErrorDialogComponent, CategoryPipe]
})
export class SharedModule { }
