import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first()
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Course) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Course) {
    return this.httpClient.post<Course>(this.API, record)
      .pipe(
        first()
      );
  }

  private update(record: Course) {
    return this.httpClient.put<Course>(`${this.API}/${record.id}`, record)
      .pipe(
        first()
      );
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
