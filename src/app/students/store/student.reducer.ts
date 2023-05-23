import { createReducer, on } from '@ngrx/store';
import { studentsLoadedAction } from './student.actions';
import { StudentModel } from './student.model';

export const studentsFeatureKey = 'studentsFeature';

export interface StudentsFeatureState {
  students: Array<StudentModel>;
}

export const initialState: StudentsFeatureState = {
  students: [],
};

export const studentsReducer = createReducer(
  initialState,
  on(studentsLoadedAction, (state, { students }) => ({ ...state, students }))
);
