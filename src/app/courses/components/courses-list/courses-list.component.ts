import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: 'app-courses-list',
  imports: [MatTableModule, MatIconModule, MatCardModule, SharedModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent {

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  constructor() {

  }

  onAdd() {
    this.add.emit(true);
  };

  onEdit(course: Course) {
    this.edit.emit(course);
  };

  onDelete(course: Course) {
    this.remove.emit(course);
  };
}
