import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbar } from '@angular/material/toolbar';

import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-course-form',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCardModule, MatToolbar, MatSelectModule, MatSnackBarModule],
  templateUrl: './course-form.component.html',
  styleUrl: '/node_modules/bootstrap/dist/css/bootstrap.css'
})
export class CourseFormComponent{

  form: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location) {

    this.form = this.formBuilder.group({
      name: [''],
      category: ['']
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (data) => this.onSuccess(),
      error: () => {
        this.onError();
      },
    });
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }

  onCancel() {
    this.location.back();
  }

}
