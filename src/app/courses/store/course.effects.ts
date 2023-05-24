import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CoursesService } from '../courses.service';
import { CourseActionTypes, courseCreatedAction, coursesLoadedAction } from './course.actions';
import { Store } from '@ngrx/store';
import { selectNextCourseId } from './course.selectors';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActionTypes.coursesRequested),
      mergeMap(() =>
        this.coursesService.getCourses().pipe(
          map((courses) => coursesLoadedAction({ courses })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createSemester$ =  createEffect(() => this.actions$.pipe(
    ofType(CourseActionTypes.courseCreate),
    concatLatestFrom(() => this.store.select(selectNextCourseId)),
    switchMap(([action, id]) => {
      return this.coursesService.createCourse(action).pipe(
        map(() => {
            return courseCreatedAction({course: {
              id,
              name: action['name'],
              code: action['code'],
              credits: action['credits'],
              department: action['department'],
            }});
        }),
        catchError(() => EMPTY)
      )
    }))
  );


  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store,
  ) {}
}
