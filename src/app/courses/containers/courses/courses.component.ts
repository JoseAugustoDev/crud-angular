import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Course } from '../../model/course';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesListComponent } from "../../components/courses-list/courses-list.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-courses',
  imports: [MatCardModule, CommonModule, CoursesListComponent, MatToolbarModule, MatProgressSpinnerModule],
  templateUrl: './courses.component.html',
  styleUrl: '/node_modules/bootstrap/dist/css/bootstrap.css'
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError("Could not find courses!");

          return of([]);
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  };

}
