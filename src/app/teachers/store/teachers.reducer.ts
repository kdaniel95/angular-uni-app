import { createReducer, on } from '@ngrx/store';
import { teacherCreateAction, teacherLoadedAction, teachersLoadedAction } from './teachers.actions';
import { TeacherModel } from './teachers.model';

export const teachersFeatureKey = 'teachersFeature';

export interface TeachersFeatureState {
  teachers: Array<TeacherModel>;
  loadedTeacher: TeacherModel | null;
}

export const initialState: TeachersFeatureState = {
  loadedTeacher: null,
  teachers: [],
};

export const teachersReducer = createReducer(
  initialState,
  on(teachersLoadedAction, (state, { teachers }) => ({ ...state, teachers })),
  on(teacherLoadedAction, (state, {teacher}) => ({
    ...state,
    loadedTeacher: teacher
  })),
  on(teacherCreateAction, (state) => ({...state})),
);
