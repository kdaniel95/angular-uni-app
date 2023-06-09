import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { StudentSemesterCoursesService } from '../student_semester_courses.service';
import {
  StudentSemesterCoursesActionType,
  studentSemesterCourseCreatedAction,
  studentSemesterCourseDeleteAction,
  studentSemesterCoursesLoadedAction,
} from './student_semester_course.actions';
import { Store } from '@ngrx/store';
import { selectNextStudentSemesterCourseId } from './student_semester_course.selectors';
import { StudentSemesterCourse } from 'src/app/data/student_semester_course';

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

  createStudentSemesterCourse$ =  createEffect(() => this.actions$.pipe(
    ofType(StudentSemesterCoursesActionType.studentSemesterCourseCreate),
    concatLatestFrom(() => this.store.select(selectNextStudentSemesterCourseId)),
    switchMap(([action, id]) => {
      return this.studentSemesterCourseService.createStudentSemesterCourse(action).pipe(
        map(() => {
            return studentSemesterCourseCreatedAction({ studentSemesterCourse: {
              id,
              studentId: action['studentId'],
              semesterId: action['semesterId'],
              courseId: action['courseId'],
            }});
        }),
        catchError(() => EMPTY)
      )
    }))
  )

  deleteStudentSemesterCourse$ = createEffect(() => this.actions$.pipe(
    ofType(StudentSemesterCoursesActionType.studentSemesterCourseDelete),
    switchMap((action) => {
      return this.studentSemesterCourseService.deleteStudentSemesterCourse(action['id']).pipe(
        map((item: StudentSemesterCourse) => {
            return studentSemesterCourseDeleteAction(item)
        }),
        catchError(() => {
          return EMPTY;
        })
      )
    })
  ))

  constructor(
    private actions$: Actions,
    private studentSemesterCourseService: StudentSemesterCoursesService,
    private store: Store,
  ) {}
}
