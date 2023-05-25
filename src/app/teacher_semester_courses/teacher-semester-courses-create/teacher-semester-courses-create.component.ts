import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { coursesRequestedAction } from 'src/app/courses/store/course.actions';
import { CourseModel } from 'src/app/courses/store/course.model';
import { selectCourses } from 'src/app/courses/store/course.selectors';
import { semestersRequestedAction } from 'src/app/semesters/store/semester.actions';
import { SemesterModel } from 'src/app/semesters/store/semester.model';
import { selectSemesters } from 'src/app/semesters/store/semester.selectors';
import { teachersRequestedAction } from 'src/app/teachers/store/teachers.actions';
import { TeacherModel } from 'src/app/teachers/store/teachers.model';
import { selectTeachers } from 'src/app/teachers/store/teachers.selectors';
import { teacherSemesterCourseCreateAction } from '../store/teacher_semester_course.actions';
import { Router } from '@angular/router';
import { TeacherTable } from 'src/app/data/teachers.data';
import { CourseTable } from 'src/app/data/course.data';
import { SemesterTable } from 'src/app/data/semester.data';

@Component({
  selector: 'app-teacher-semester-courses-create',
  templateUrl: './teacher-semester-courses-create.component.html',
  styleUrls: ['./teacher-semester-courses-create.component.css']
})
export class TeacherSemesterCoursesCreateComponent implements OnInit {
  teacherSemesterCoursesForm: FormGroup

  constructor(private store: Store, private formBuilder: FormBuilder, private router: Router){}

  teachers$: Observable<TeacherModel[]> = this.store.pipe(
    select(selectTeachers)
  );

  semesters$: Observable<SemesterModel[]> = this.store.pipe(
    select(selectSemesters)
  );

  courses$: Observable<CourseModel[]> = this.store.pipe(
    select(selectCourses)
  );

  ngOnInit(): void {
    this.store.dispatch(teachersRequestedAction());
    this.store.dispatch(semestersRequestedAction());
    this.store.dispatch(coursesRequestedAction());

    this.teacherSemesterCoursesForm = this.formBuilder.group({
      teacherId: ['', [Validators.required]],
      semesterId: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
    });
  }

  onSubmit(data: any) {
    data.teacherName = TeacherTable.teachers.find(teacher => teacher.id === data.teacherId)?.name;
    data.course = CourseTable.courses.find(course => course.id === data.courseId);
    data.semesterName = SemesterTable.semesters.find(semester => semester.id === data.semesterId)?.name;
    this.store.dispatch(teacherSemesterCourseCreateAction(data));
    this.teacherSemesterCoursesForm.reset();
    this.router.navigate(['/teacher_semester_course']);
  }

  get teacherId(){
    return this.teacherSemesterCoursesForm.get('teacherId')
  }

  get semesterId(){
    return this.teacherSemesterCoursesForm.get('semesterId')
  }

  get courseId(){
    return this.teacherSemesterCoursesForm.get('courseId')
  }

  getTeacherIdErrorMessage() {
    if (this.teacherId?.dirty || this.teacherId?.touched) {
      if (this.teacherId.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }

  getSemesterIdErrorMessage() {
    if (this.semesterId?.dirty || this.semesterId?.touched) {
      if (this.semesterId.hasError('required')) return 'You must enter a value!';
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
