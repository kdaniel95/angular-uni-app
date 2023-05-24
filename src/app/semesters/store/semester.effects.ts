import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { SemestersService } from '../semesters.service';
import { SemesterActionTypes, semesterCreatedAction, semestersLoadedAction } from './semester.actions';
import { Store } from '@ngrx/store';
import { selectNextSemesterId } from './semester.selectors';

@Injectable()
export class SemesterEffects {
  loadSemesters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SemesterActionTypes.semestersRequested),
      mergeMap(() =>
        this.semestersService.getSemesters().pipe(
          map((semesters) => semestersLoadedAction({ semesters })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createSemester$ =  createEffect(() => this.actions$.pipe(
    ofType(SemesterActionTypes.semesterCreate),
    concatLatestFrom(() => this.store.select(selectNextSemesterId)),
    switchMap(([action, id]) => {
      return this.semestersService.createSemester(action).pipe(
        map(() => {
            return semesterCreatedAction({semester: {
              id,
              name: action['name'],
              startDate: action['startDate'],
              endDate: action['endDate'],
            }});
        }),
        catchError(() => EMPTY)
      )
    }))
  )

  constructor(
    private actions$: Actions,
    private semestersService: SemestersService,
    private store: Store,
  ) {}
}
