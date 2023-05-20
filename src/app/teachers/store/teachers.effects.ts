import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TeachersService } from '../teachers.service';
import { TeacherActionTypes } from './teachers.actions';
import { teachersLoadedAction } from './teachers.actions';

@Injectable()
export class TeacherEffects{

  loadTeachers$ = createEffect(() => this.actions$.pipe(
    ofType(TeacherActionTypes.teachersRequested),
    mergeMap(() => this.teachersService.getTeachers()
      .pipe(
        map(teachers => (teachersLoadedAction({teachers}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private teachersService: TeachersService,
    ){}
}

