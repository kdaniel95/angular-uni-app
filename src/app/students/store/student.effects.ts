import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { StudentActionTypes, studentsLoadedAction } from './student.actions';
import { StudentsService } from '../students.service';

@Injectable()
export class StudentsEffects{

  loadSemesters$ = createEffect(() => this.actions$.pipe(
    ofType(StudentActionTypes.coursesRequested),
    mergeMap(() => this.studentsService.getStudents()
      .pipe(
        map(students => (studentsLoadedAction({students}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private studentsService: StudentsService,
    ){}
}

