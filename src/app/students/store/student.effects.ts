import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { StudentsService } from '../students.service';
import { StudentActionTypes, studentsLoadedAction } from './student.actions';

@Injectable()
export class StudentsEffects {
  loadSemesters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActionTypes.coursesRequested),
      mergeMap(() =>
        this.studentsService.getStudents().pipe(
          map((students) => studentsLoadedAction({ students })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private studentsService: StudentsService
  ) {}
}
