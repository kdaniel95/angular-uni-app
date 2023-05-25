import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { TeachersService } from '../teachers.service';
import { TeacherActionTypes, teacherCreatedAction, teacherLoadedAction, teacherUpdatedAction, teachersLoadedAction } from './teachers.actions';
import { selectNextTeacherId } from './teachers.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class TeacherEffects {

  loadTeacher$ = createEffect(() => this.actions$.pipe(
    ofType(TeacherActionTypes.teacherRequested),
    switchMap((action: any) => this.teachersService.getTeacher(action.id)
      .pipe(
        map(teacher => (teacherLoadedAction({teacher}))),
        catchError(() => EMPTY)
      ))
    )
  );


  loadTeachers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeacherActionTypes.teachersRequested),
      mergeMap(() =>
        this.teachersService.getTeachers().pipe(
          map((teachers) => teachersLoadedAction({ teachers })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createTeacher$ =  createEffect(() => this.actions$.pipe(
    ofType(TeacherActionTypes.teacherCreate),
    concatLatestFrom(() => this.store.select(selectNextTeacherId)),
    switchMap(([action, id]) => {
      return this.teachersService.createTeacher(action).pipe(
        map(() => {
            return teacherCreatedAction({teacher: {
              id,
              neptunCode: action['neptunCode'],
              name: action['name'],
              email: action['email'],
              position: action['position'],
              roles: action['roles'],
              department: action['department'],
              dob: action['dob']
            }});
        }),
        catchError(() => EMPTY)
      )
    })
  ))

  updateTeacher$ = createEffect(() => this.actions$.pipe(
    ofType(TeacherActionTypes.teacherUpdate),
    switchMap((action) => {
      return this.teachersService.updateTeacher(action).pipe(
        map(() => {
            return teacherUpdatedAction({ teacher: {
              id: action['id'],
              neptunCode: action['neptunCode'],
              name: action['name'],
              email: action['email'],
              position: action['position'],
              roles: action['roles'],
              department: action['department'],
              dob: action['dob']
            }});
        }),
        catchError(() => EMPTY)
      )
    })
  ))

  constructor(
    private actions$: Actions,
    private teachersService: TeachersService,
    private store: Store,
  ) {}
}
