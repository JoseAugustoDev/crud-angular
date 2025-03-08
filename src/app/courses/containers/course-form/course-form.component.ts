import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { Course } from '../../model/course';


@Component({
  selector: 'app-course-form',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCardModule, MatToolbar, MatSelectModule, MatSnackBarModule],
  templateUrl: './course-form.component.html',
  styleUrl: '/node_modules/bootstrap/dist/css/bootstrap.css'
})
export class CourseFormComponent implements OnInit{

  form: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {

    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      category: ['', [Validators.required]]
    });
  }

  ngOnInit():void {
    const course: Course = this.route.snapshot.data['course'];
    this.form.setValue({
      id: course.id,
      name: course.name,
      category: course.category
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

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    const erros = this.form.getError(fieldName);

    if (field?.hasError('minlength')) {
      const requiredLenght = erros ? erros['requiredlength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLenght} caracteres`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLenght = erros ? erros['requiredlength'] : 50;
      return `Tamanho máximo é de ${requiredLenght} caracteres`;
    }

    return 'Campo Obrigatório.';
  }

}
