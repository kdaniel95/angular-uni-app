import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { semestersRequestedAction } from 'src/app/semesters/store/semester.actions';
import { selectSemesters } from 'src/app/semesters/store/semester.selectors';
import { teachersRequestedAction } from 'src/app/teachers/store/teachers.actions';
import { TeacherModel } from 'src/app/teachers/store/teachers.model';
import { selectTeachers } from 'src/app/teachers/store/teachers.selectors';
import { SemesterModel } from '../../semesters/store/semester.model';

@Component({
  selector: 'app-teacher_semester_course',
  templateUrl: './teacher_semester_course.component.html',
  styleUrls: ['./teacher_semester_course.component.css'],
})
export class TeacherSemesterCourseComponent implements OnInit {
  teachers$: Observable<TeacherModel[]> = this.store.pipe(
    select(selectTeachers)
  );
  semesters$: Observable<SemesterModel[]> = this.store.pipe(
    select(selectSemesters)
  );

  selectedTeacher: number;
  selectedSemester: number;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(teachersRequestedAction());
    this.store.dispatch(semestersRequestedAction());
  }

  onSubmit() {
    this.router.navigate([
      '/teacher_semester_course',
      this.selectedTeacher,
      this.selectedSemester,
    ]);
  }
}
