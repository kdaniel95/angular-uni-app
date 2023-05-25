import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import * as fromSemesters from '../semesters/store/semester.reducer';
import * as fromStudentSemesterCourses from '../student_semester_courses/store/student_semester_course.reducer';
import * as fromStudents from '../students/store/student.reducer';
import * as fromCourses from '../courses/store/course.reducer';
import { StudentSemesterCourseRoutingModule } from './student_semester_course-routing.module';
import { StudentSemesterCourseComponent } from './student_semester_course/student_semester_course.component';

import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SemestersService } from '../semesters/semesters.service';
import { SemesterEffects } from '../semesters/store/semester.effects';
import { StudentsEffects } from '../students/store/student.effects';
import { StudentsService } from '../students/students.service';
import { StudentSemesterCoursesEffects } from './store/student_semester_course.effects';
import { StudentSemesterCoursesListComponent } from './student_semester_courses-list/student_semester_courses-list.component';
import { StudentSemesterCoursesService } from './student_semester_courses.service';
import { StudentSemesterCoursesCreateComponent } from './student-semester-courses-create/student-semester-courses-create.component';
import { CoursesEffects } from '../courses/store/course.effects';
import { MatIconModule } from '@angular/material/icon';
import { CoursesService } from '../courses/courses.service';

@NgModule({
  declarations: [
    StudentSemesterCourseComponent,
    StudentSemesterCoursesListComponent,
    StudentSemesterCoursesCreateComponent,
  ],
  imports: [
    CommonModule,
    StudentSemesterCourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(
      fromStudents.studentsFeatureKey,
      fromStudents.studentsReducer
    ),
    StoreModule.forFeature(
      fromSemesters.semestersFeatureKey,
      fromSemesters.semesterReducer
    ),
    StoreModule.forFeature(
      fromCourses.coursesFeatureKey,
      fromCourses.coursesReducer
    ),
    StoreModule.forFeature(
      fromStudentSemesterCourses.studentSemesterCoursesFeatureKey,
      fromStudentSemesterCourses.teacherSemesterCoursesReducer
    ),
    EffectsModule.forFeature([StudentsEffects]),
    EffectsModule.forFeature([SemesterEffects]),
    EffectsModule.forFeature([CoursesEffects]),
    EffectsModule.forFeature([StudentSemesterCoursesEffects]),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [StudentsService, SemestersService, CoursesService, StudentSemesterCoursesService],
})
export class StudentSemesterCourseModule {}
