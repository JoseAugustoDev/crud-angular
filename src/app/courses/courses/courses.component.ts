import { Component } from '@angular/core';
import { Course } from '../model/course';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
})
export class CoursesComponent {

  courses: Course[] = [];


  constructor(private coursesService: CoursesService) {

    this.courses = this.coursesService.list();
  }


}
