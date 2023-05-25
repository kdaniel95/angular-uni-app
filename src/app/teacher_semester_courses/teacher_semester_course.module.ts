import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import * as fromSemesters from '../semesters/store/semester.reducer';
import * as fromTeacherSemesterCourses from '../teacher_semester_courses/store/teacher_semester_course.reducer';
import * as fromTeachers from '../teachers/store/teachers.reducer';
import * as fromCourses from '../courses/store/course.reducer';
import { TeacherSemesterCoursesEffects } from './store/teacher_semester_course.effects';
import { TeacherSemesterCourseRoutingModule } from './teacher_semester_course-routing.module';
import { TeacherSemesterCourseComponent } from './teacher_semester_course/teacher_semester_course.component';

import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SemestersService } from '../semesters/semesters.service';
import { SemesterEffects } from '../semesters/store/semester.effects';
import { TeacherEffects } from '../teachers/store/teachers.effects';
import { TeachersService } from '../teachers/teachers.service';
import { TeacherSemesterCoursesListComponent } from './teacher_semester_courses-list/teacher_semester_courses_list.component';
import { TeacherSemesterCoursesService } from './teacher_semester_courses.service';
import { TeacherSemesterCoursesCreateComponent } from './teacher-semester-courses-create/teacher-semester-courses-create.component';
import { CoursesService } from '../courses/courses.service';
import { CoursesEffects } from '../courses/store/course.effects';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TeacherSemesterCourseComponent,
    TeacherSemesterCoursesListComponent,
    TeacherSemesterCoursesCreateComponent,
  ],
  imports: [
    CommonModule,
    TeacherSemesterCourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(
      fromTeachers.teachersFeatureKey,
      fromTeachers.teachersReducer
    ),
    StoreModule.forFeature(
      fromSemesters.semestersFeatureKey,
      fromSemesters.semesterReducer
    ),
    StoreModule.forFeature(
      fromTeacherSemesterCourses.teacherSemesterCoursesFeatureKey,
      fromTeacherSemesterCourses.teacherSemesterCoursesReducer
    ),
    StoreModule.forFeature(
      fromCourses.coursesFeatureKey,
      fromCourses.coursesReducer
    ),
    EffectsModule.forFeature([TeacherEffects]),
    EffectsModule.forFeature([SemesterEffects]),
    EffectsModule.forFeature([CoursesEffects]),
    EffectsModule.forFeature([TeacherSemesterCoursesEffects]),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [TeachersService, SemestersService, CoursesService, TeacherSemesterCoursesService],
})
export class TeacherSemesterCourseModule {}
