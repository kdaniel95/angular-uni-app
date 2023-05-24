import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/data/student.data';
import { StudentModel } from './student.model';

export enum StudentActionTypes {
  studentRequested = '[Student] Student Requested',
  studentLoaded = '[Student] Student Loaded',
  studentsRequested = '[Students] Students Requested',
  studentsLoaded = '[Students] Students Loaded',
  studentCreate = '[Students] Student Create',
  studentCreated = '[Students] Student Created',
  studentUpdate = '[Students] Student Update',
  studentUpdated = '[Students] Student Updated',
}

export const studentRequestedAction = createAction(
  StudentActionTypes.studentRequested,
  props<{ id: number }>()
);

export const studentLoadedAction = createAction(
  StudentActionTypes.studentLoaded,
  props<{ student: StudentModel }>()
);

export const studentsRequestedAction = createAction(
  StudentActionTypes.studentsRequested
);

export const studentsLoadedAction = createAction(
  StudentActionTypes.studentsLoaded,
  props<{ students: Student[] }>()
);

export const studentCreateAction = createAction(
  StudentActionTypes.studentCreate,
  props<{ student: StudentModel }>()
);

export const studentCreatedAction = createAction(
  StudentActionTypes.studentCreated,
  props<{ student: StudentModel }>()
);

export const studentUpdateAction = createAction(
  StudentActionTypes.studentUpdate,
  props<{ student: StudentModel }>()
);

export const studentUpdatedAction = createAction(
  StudentActionTypes.studentUpdated,
  props<{ student: StudentModel }>()
);
