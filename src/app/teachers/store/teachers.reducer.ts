import { createReducer, on, Action } from '@ngrx/store';
import { TeacherModel } from './teachers.model';
import { teachersLoadedAction } from './teachers.actions';

export const teachersFeatureKey = 'teachersFeature';

export interface TeachersFeatureState {
  teachers: Array<TeacherModel>;
}

export const initialState: TeachersFeatureState = {
  teachers: [],
};

export const teachersReducer = createReducer(
  initialState,
  on(teachersLoadedAction, (state, {teachers}) => ({...state, teachers})),
)
