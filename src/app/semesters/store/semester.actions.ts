import { createAction, props } from '@ngrx/store';
import { Semester } from 'src/app/data/semester.data';


export enum SemesterActionTypes {
  semesterRequested = '[Semester] Semester Requested',
  semesterLoaded = '[Semester] Semester Loaded',
  semestersRequested = '[Semesters] Semesters Requested',
  semestersLoaded = '[Semesters] Semesters Loaded',
  semesterCreate = '[Semesters] Semesters Create',
  semesterCreated = '[Semesters] Semesters Created',
  semesterUpdate = '[Semester] Semester Update',
  semesterUpdated = '[Semester] Semester Updated',
}

export const semesterRequestedAction = createAction(
  SemesterActionTypes.semesterRequested,
  props<{ id: number }>()
);

export const semesterLoadedAction = createAction(
  SemesterActionTypes.semesterLoaded,
  props<{ semester: Semester }>()
);

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

export const semesterUpdateAction = createAction(
  SemesterActionTypes.semesterUpdate,
  props<{ semester: Semester }>()
);

export const semesterUpdatedAction = createAction(
  SemesterActionTypes.semesterUpdated,
  props<{ semester: Semester }>()
);
