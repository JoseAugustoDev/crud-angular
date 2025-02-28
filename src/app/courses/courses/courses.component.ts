import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../model/course';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-courses',
  imports: [MatTableModule, MatCardModule],
  templateUrl: './courses.component.html',
  styleUrl: '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
})
export class CoursesComponent {

  courses: Course[];

  constructor() {
    this.courses = [
      { _id: "1", name: "Curso de Angular", category: "Front-end" },
      { _id: "2", name: "Curso de React", category: "Front-end" },
      { _id: "3", name: "Curso de Vue.js", category: "Front-end" },
      { _id: "4", name: "Curso de Node.js", category: "Back-end" },
      { _id: "5", name: "Curso de Python", category: "Back-end" },
      { _id: "6", name: "Curso de Java", category: "Back-end" },
      { _id: "7", name: "Curso de Banco de Dados", category: "Banco de Dados" },
      { _id: "8", name: "Curso de DevOps", category: "Infraestrutura" },
      { _id: "9", name: "Curso de UI/UX Design", category: "Design" },
      { _id: "10", name: "Curso de Cibersegurança", category: "Segurança" }
    ];
  }


}
