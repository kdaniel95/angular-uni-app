import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { StudentSemesterCoursesService } from '../student_semester_courses.service';
import {
  StudentSemesterCoursesActionType,
  studentSemesterCoursesLoadedAction,
} from './student_semester_course.actions';

@Injectable()
export class StudentSemesterCoursesEffects {
  loadsStudentSemesterCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentSemesterCoursesActionType.studentSemesterCoursesRequested),
      switchMap((action: any) =>
        this.studentSemesterCourseService
          .getStudentSemesterCourses(action.studentId, action.semesterId)
          .pipe(
            map((studentSemesterCourses) =>
              studentSemesterCoursesLoadedAction({ studentSemesterCourses })
            ),
            catchError(() => EMPTY)
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private studentSemesterCourseService: StudentSemesterCoursesService
  ) {}
}
