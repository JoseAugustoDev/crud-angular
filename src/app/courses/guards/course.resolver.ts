import { ResolveFn } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';
import { of, Observable } from 'rxjs';
import { inject } from '@angular/core';

export const courseResolver: ResolveFn<Observable<Course>> = (route, state, service: CoursesService = inject(CoursesService)) => {

  if (route.params?.['id']) {
    return service.loadById(route.params['id']);
  }
  return of({ id: '', name: '', category: '' });
};
