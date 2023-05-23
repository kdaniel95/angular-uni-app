import { SemesterModel } from '../../semesters/store/semester.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TeacherModel } from 'src/app/teachers/store/teachers.model';
import { Store, select } from '@ngrx/store';
import { selectTeachers } from 'src/app/teachers/store/teachers.selectors';
import { selectSemesters } from 'src/app/semesters/store/semester.selectors';
import { teachersRequestedAction } from 'src/app/teachers/store/teachers.actions';
import { semestersRequestedAction } from 'src/app/semesters/store/semester.actions';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-teacher_semester_course',
  templateUrl: './teacher_semester_course.component.html',
  styleUrls: ['./teacher_semester_course.component.css']
})

export class TeacherSemesterCourseComponent implements OnInit {

  teachers$: Observable<TeacherModel[]> = this.store.pipe(select(selectTeachers));
  semesters$: Observable<SemesterModel[]> = this.store.pipe(select(selectSemesters));

  selectedTeacher: number;
  selectedSemester: number;

  constructor(
    private store: Store,
    private router: Router
    ) {
    }

  ngOnInit(): void {
    this.store.dispatch(teachersRequestedAction());
    this.store.dispatch(semestersRequestedAction());
  }

  onSubmit()
  {
    this.router.navigate(['/teacher_semester_course', this.selectedTeacher, this.selectedSemester]);
  }
}
