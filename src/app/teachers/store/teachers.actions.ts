import { createAction, props } from '@ngrx/store';
import { TeacherModel } from './teachers.model';

export enum TeacherActionTypes {
  teachersRequested = '[Teachers] Teachers Requested',
  teachersLoaded = '[Teachers] Teachers Loaded',
}

export const teachersRequestedAction = createAction(
  TeacherActionTypes.teachersRequested
);

export const teachersLoadedAction = createAction(
  TeacherActionTypes.teachersLoaded,
  props<{ teachers: TeacherModel[] }>()
);
