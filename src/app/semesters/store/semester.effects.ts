import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { SemestersService } from '../semesters.service';
import { SemesterActionTypes, semesterCreatedAction, semesterLoadedAction, semesterUpdatedAction, semestersLoadedAction } from './semester.actions';
import { Store } from '@ngrx/store';
import { selectNextSemesterId } from './semester.selectors';

@Injectable()
export class SemesterEffects {

  loadSemester$ = createEffect(() => this.actions$.pipe(
    ofType(SemesterActionTypes.semesterRequested),
    switchMap((action: any) => this.semestersService.getSemester(action.id).pipe(
      map(semester => semesterLoadedAction({semester}))
    ))
  ));

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

  updateSemester$ = createEffect(() => this.actions$.pipe(
    ofType(SemesterActionTypes.semesterUpdate),
    switchMap((action) => {
      return this.semestersService.updateSemester(action).pipe(
        map(() => {
            return semesterUpdatedAction({ semester: {
              id: action['id'],
              name: action['name'],
              startDate: action['startDate'],
              endDate: action['endDate'],
            }});
        }),
        catchError(() => EMPTY)
      )
    })
  ))

  constructor(
    private actions$: Actions,
    private semestersService: SemestersService,
    private store: Store,
  ) {}
}
