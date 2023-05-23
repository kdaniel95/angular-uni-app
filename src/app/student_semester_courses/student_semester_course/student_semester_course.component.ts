import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { semestersRequestedAction } from 'src/app/semesters/store/semester.actions';
import { selectSemesters } from 'src/app/semesters/store/semester.selectors';
import { studentsRequestedAction } from 'src/app/students/store/student.actions';
import { StudentModel } from 'src/app/students/store/student.model';
import { selectStudents } from 'src/app/students/store/student.selectors';
import { SemesterModel } from '../../semesters/store/semester.model';

@Component({
  selector: 'app-student_semester_course',
  templateUrl: './student_semester_course.component.html',
  styleUrls: ['./student_semester_course.component.css'],
})
export class StudentSemesterCourseComponent implements OnInit {
  students$: Observable<StudentModel[]> = this.store.pipe(
    select(selectStudents)
  );
  semesters$: Observable<SemesterModel[]> = this.store.pipe(
    select(selectSemesters)
  );

  selectedStudent: number;
  selectedSemester: number;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(studentsRequestedAction());
    this.store.dispatch(semestersRequestedAction());
  }

  onSubmit() {
    this.router.navigate([
      '/student_semester_course',
      this.selectedStudent,
      this.selectedSemester,
    ]);
  }
}
