import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { StudentsService } from '../students.service';
import { StudentActionTypes, studentCreatedAction, studentsLoadedAction } from './student.actions';
import { Store } from '@ngrx/store';
import { selectNextStudentId } from './student.selectors';

@Injectable()
export class StudentsEffects {
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActionTypes.studentsRequested),
      mergeMap(() =>
        this.studentsService.getStudents().pipe(
          map((students) => studentsLoadedAction({ students })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createStudent$ =  createEffect(() =>this.actions$.pipe(
    ofType(StudentActionTypes.studentCreate),
    concatLatestFrom(() => this.store.select(selectNextStudentId)),
    switchMap(([action, id]) => {
      return this.studentsService.createStudent(action).pipe(
        map(() => {
            return studentCreatedAction({student: {
              id,
              neptunCode: action['neptunCode'],
              name: action['name'],
              email: action['email'],
              major: action['major']
            }});
        }),
        catchError(() => EMPTY)
      )
    }))
  )

  constructor(
    private actions$: Actions,
    private studentsService: StudentsService,
    private store: Store
  ) {}
}
