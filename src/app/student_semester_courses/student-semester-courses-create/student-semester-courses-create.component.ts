import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { coursesRequestedAction } from 'src/app/courses/store/course.actions';
import { CourseModel } from 'src/app/courses/store/course.model';
import { selectCourses } from 'src/app/courses/store/course.selectors';
import { CourseTable } from 'src/app/data/course.data';
import { SemesterTable } from 'src/app/data/semester.data';
import { StudentTable } from 'src/app/data/student.data';
import { semestersRequestedAction } from 'src/app/semesters/store/semester.actions';
import { SemesterModel } from 'src/app/semesters/store/semester.model';
import { selectSemesters } from 'src/app/semesters/store/semester.selectors';
import { studentsRequestedAction } from 'src/app/students/store/student.actions';
import { StudentModel } from 'src/app/students/store/student.model';
import { selectStudents } from 'src/app/students/store/student.selectors';
import { studentSemesterCourseCreateAction } from '../store/student_semester_course.actions';

@Component({
  selector: 'app-student-semester-courses-create',
  templateUrl: './student-semester-courses-create.component.html',
  styleUrls: ['./student-semester-courses-create.component.css'],
})
export class StudentSemesterCoursesCreateComponent {
  studentSemesterCoursesForm: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  students$: Observable<StudentModel[]> = this.store.pipe(
    select(selectStudents)
  );

  semesters$: Observable<SemesterModel[]> = this.store.pipe(
    select(selectSemesters)
  );

  courses$: Observable<CourseModel[]> = this.store.pipe(select(selectCourses));

  ngOnInit(): void {
    this.store.dispatch(studentsRequestedAction());
    this.store.dispatch(semestersRequestedAction());
    this.store.dispatch(coursesRequestedAction());

    this.studentSemesterCoursesForm = this.formBuilder.group({
      studentId: ['', [Validators.required]],
      semesterId: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
    });
  }

  onSubmit(data: any) {
    data.studentName = StudentTable.students.find(
      (student) => student.id === data.studentId
    )?.name;
    data.course = CourseTable.courses.find(
      (course) => course.id === data.courseId
    );
    data.semesterName = SemesterTable.semesters.find(
      (semester) => semester.id === data.semesterId
    )?.name;
    this.store.dispatch(studentSemesterCourseCreateAction(data));
    this.studentSemesterCoursesForm.reset();
    this.router.navigate(['/student_semester_course']);
  }

  get studentId() {
    return this.studentSemesterCoursesForm.get('studentId');
  }

  get semesterId() {
    return this.studentSemesterCoursesForm.get('semesterId');
  }

  get courseId() {
    return this.studentSemesterCoursesForm.get('courseId');
  }

  getStudentIdErrorMessage() {
    if (this.studentId?.dirty || this.studentId?.touched) {
      if (this.studentId.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }

  getSemesterIdErrorMessage() {
    if (this.semesterId?.dirty || this.semesterId?.touched) {
      if (this.semesterId.hasError('required'))
        return 'You must enter a value!';
    }
    return '';
  }

  getCourseIdErrorMessage() {
    if (this.courseId?.dirty || this.courseId?.touched) {
      if (this.courseId.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }
}
