import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SemestersService } from '../semesters.service';
import { SemesterActionTypes, semestersLoadedAction } from './semester.actions';

@Injectable()
export class SemesterEffects{

  loadSemesters$ = createEffect(() => this.actions$.pipe(
    ofType(SemesterActionTypes.coursesRequested),
    mergeMap(() => this.semestersService.getSemesters()
      .pipe(
        map(semesters => (semestersLoadedAction({semesters}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private semestersService: SemestersService,
    ){}
}

