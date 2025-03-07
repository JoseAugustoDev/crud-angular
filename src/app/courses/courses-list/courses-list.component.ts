import { Component, Input } from '@angular/core';
import { Course } from '../model/course';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-courses-list',
  imports: [MatTableModule, MatIconModule, MatCardModule, SharedModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent {

  @Input()courses: Course[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  };
}
