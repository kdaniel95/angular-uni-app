import { createAction, props } from '@ngrx/store';
import { Semester } from 'src/app/data/semester.data';


export enum SemesterActionTypes {
  semestersRequested = '[Semesters] Semesters Requested',
  semestersLoaded = '[Semesters] Semesters Loaded',
  semesterCreate = '[Semesters] Semesters Create',
  semesterCreated = '[Semesters] Semesters Created',
  studentsRequested = "studentsRequested"
}

export const semestersRequestedAction = createAction(
  SemesterActionTypes.semestersRequested
);

export const semestersLoadedAction = createAction(
  SemesterActionTypes.semestersLoaded,
  props<{ semesters: Semester[] }>()
);

export const semesterCreateAction = createAction(
  SemesterActionTypes.semesterCreate,
  props<{ semester: Semester }>()
);

export const semesterCreatedAction = createAction(
  SemesterActionTypes.semesterCreated,
  props<{ semester: Semester }>()
);
