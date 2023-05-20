import { Component, OnInit } from '@angular/core';
import { selectTeachers } from '../store/course.selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseModel } from '../store/course.model';
import { coursesRequestedAction } from '../store/course.actions';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  displayedColumns: string[] = ['id','name','code','credits','department', 'enrolledStudents', 'teachers'];

  courses$: Observable<CourseModel[]> = this.store.pipe(select(selectTeachers))

  constructor(
  private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(coursesRequestedAction());
  }

}
