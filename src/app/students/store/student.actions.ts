import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/data/student.data';
import { StudentModel } from './student.model';

export enum StudentActionTypes {
  studentsRequested = '[Students] Students Requested',
  studentsLoaded = '[Students] Students Loaded',
  studentCreate = '[Students] Student Create',
  studentCreated = '[Students] Student Created',
}

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
