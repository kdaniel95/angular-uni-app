import { Injectable } from '@angular/core';
import { Actions, act, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TeacherSemesterCoursesService } from '../teacher_semester_courses.service';
import {
  TeacherSemesterCoursesActionType,
  teacherSemesterCourseCreatedAction,
  teacherSemesterCourseDeleteAction,
  teachersSemesterCoursesLoadedAction,
} from './teacher_semester_course.actions';
import { selectNextTeacherSemesterCourseId } from './teacher_semester_course.selectors';
import { Store } from '@ngrx/store';
import { TeacherTable } from 'src/app/data/teachers.data';
import { CourseTable } from 'src/app/data/course.data';
import { SemesterTable } from 'src/app/data/semester.data';
import { TeacherSemesterCourse } from 'src/app/data/teacher_semester_course';

@Injectable()
export class TeacherSemesterCoursesEffects {
  loadTeacherSemesterCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeacherSemesterCoursesActionType.teacherSemesterCoursesRequested),
      switchMap((action: any) =>
        this.teacherSemesterCourseService
          .getTeacherSemesterCourses(action.teacherId, action.semesterId)
          .pipe(
            map((teacherSemesterCourses) =>
              teachersSemesterCoursesLoadedAction({ teacherSemesterCourses })
            ),
            catchError(() => EMPTY)
          )
      )
    )
  );

  createTeacherSemesterCourse$ =  createEffect(() => this.actions$.pipe(
    ofType(TeacherSemesterCoursesActionType.teacherSemesterCourseCreate),
    concatLatestFrom(() => this.store.select(selectNextTeacherSemesterCourseId)),
    switchMap(([action, id]) => {
      return this.teacherSemesterCourseService.createTeacherSemesterCourse(action).pipe(
        map(() => {
            return teacherSemesterCourseCreatedAction({ teacherSemesterCourse: {
              id,
              teacherId: action['teacherId'],
              semesterId: action['semesterId'],
              courseId: action['courseId'],
            }});
        }),
        catchError(() => EMPTY)
      )
    }))
  )

  deleteTeacherSemesterCourse$ = createEffect(() => this.actions$.pipe(
    ofType(TeacherSemesterCoursesActionType.teacherSemesterCourseDelete),
    switchMap((action) => {
      return this.teacherSemesterCourseService.deleteTeacherSemesterCourse(action['id']).pipe(
        map((item: TeacherSemesterCourse) => {
            return teacherSemesterCourseDeleteAction(item)
        }),
        catchError(() => {
          return EMPTY;
        })
      )
    })
  ))

  constructor(
    private actions$: Actions,
    private teacherSemesterCourseService: TeacherSemesterCoursesService,
    private store: Store,
  ) {}
}
