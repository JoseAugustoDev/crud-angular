import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  list(): Course[] {
    return [
      { _id: "1", name: "Curso de Angular", category: "Front-end" },
      { _id: "2", name: "Curso de React", category: "Front-end" },
      { _id: "3", name: "Curso de Vue.js", category: "Front-end" },
      { _id: "4", name: "Curso de Node.js", category: "Back-end" },
      { _id: "5", name: "Curso de Python", category: "Back-end" },
      { _id: "6", name: "Curso de Java", category: "Back-end" }
    ];
  }
}
