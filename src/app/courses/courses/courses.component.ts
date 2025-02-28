import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-courses',
  imports: [MatTableModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: '/node_modules/bootstrap/dist/css/bootstrap.css'
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {

    this.courses$ = this.coursesService.list();
  }


}
