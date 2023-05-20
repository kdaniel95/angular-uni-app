import { createAction, props } from '@ngrx/store';
import { Semester } from 'src/app/data/semester.data';

export enum SemesterActionTypes {
  coursesRequested = '[Semesters] Semesters Requested',
  coursesLoaded = '[Semesters] Semesters Loaded',
}

export const semestersRequestedAction = createAction(
  SemesterActionTypes.coursesRequested
);

export const semestersLoadedAction = createAction(
  SemesterActionTypes.coursesLoaded,
  props<{semesters: Semester[]}>()
);
