import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/data/student.data';

export enum StudentActionTypes {
  coursesRequested = '[Students] Students Requested',
  coursesLoaded = '[Students] Students Loaded',
}

export const studentsRequestedAction = createAction(
  StudentActionTypes.coursesRequested
);

export const studentsLoadedAction = createAction(
  StudentActionTypes.coursesLoaded,
  props<{students: Student[]}>()
);
