import { TeacherSemesterCoursesEffects } from './store/teacher_semester_course.effects';
import { TeacherSemesterCourseRoutingModule } from './teacher_semester_course-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherSemesterCourseComponent } from './teacher_semester_course/teacher_semester_course.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromTeachers from '../teachers/store/teachers.reducer';
import * as fromSemesters from '../semesters/store/semester.reducer';
import * as fromTeacherSemesterCourses from '../teacher_semester_courses/store/teacher_semester_course.reducer'

import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from '../teachers/store/teachers.effects';
import { TeachersService } from '../teachers/teachers.service';
import { SemesterEffects } from '../semesters/store/semester.effects';
import { SemestersService } from '../semesters/semesters.service';
import { TeacherSemesterCoursesService } from './teacher_semester_courses.service';
import { TeacherSemesterCoursesListComponent } from './teacher_semester_courses-list/teacher_semester_courses_list.component';



@NgModule({
  declarations: [
    TeacherSemesterCourseComponent,
    TeacherSemesterCoursesListComponent
  ],
  imports: [
    CommonModule, TeacherSemesterCourseRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(fromTeachers.teachersFeatureKey, fromTeachers.teachersReducer),
    StoreModule.forFeature(fromSemesters.semestersFeatureKey, fromSemesters.semesterReducer),
    StoreModule.forFeature(fromTeacherSemesterCourses.teacherSemesterCoursesFeatureKey, fromTeacherSemesterCourses.teacherSemesterCoursesReducer),
    EffectsModule.forFeature([TeacherEffects]),
    EffectsModule.forFeature([SemesterEffects]),
    EffectsModule.forFeature([TeacherSemesterCoursesEffects]),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [TeachersService, SemestersService, TeacherSemesterCoursesService]
})
export class TeacherSemesterCourseModule { }
