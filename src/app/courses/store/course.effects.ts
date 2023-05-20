import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoursesService } from '../courses.service';
import { CourseActionTypes, coursesLoadedAction } from './course.actions';

@Injectable()
export class CoursesEffects{

  loadCourses$ = createEffect(() => this.actions$.pipe(
    ofType(CourseActionTypes.coursesRequested),
    mergeMap(() => this.coursesService.getCourses()
      .pipe(
        map(courses => (coursesLoadedAction({courses}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    ){}
}

