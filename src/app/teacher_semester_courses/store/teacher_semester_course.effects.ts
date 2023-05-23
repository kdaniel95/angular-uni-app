import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { TeacherSemesterCoursesActionType, teachersSemesterCoursesLoadedAction, teacherSemesterCoursesRequestedAction } from './teacher_semester_course.actions';
import { TeacherSemesterCoursesService } from '../teacher_semester_courses.service';

@Injectable()
export class TeacherSemesterCoursesEffects{

  loadTeacherSemesterCourses$ = createEffect(() => this.actions$.pipe(
    ofType(TeacherSemesterCoursesActionType.teacherSemesterCoursesRequested),
    switchMap((action: any) => this.teacherSemesterCourseService.getTeacherSemesterCourses(action.teacherId, action.semesterId)
      .pipe(
        map(teacherSemesterCourses => (teachersSemesterCoursesLoadedAction({teacherSemesterCourses}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private teacherSemesterCourseService: TeacherSemesterCoursesService,
    ){}
}
