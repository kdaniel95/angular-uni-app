import { createReducer, on } from '@ngrx/store';
import { studentCreateAction, studentLoadedAction, studentsLoadedAction } from './student.actions';
import { StudentModel } from './student.model';
import { state } from '@angular/animations';

export const studentsFeatureKey = 'studentsFeature';

export interface StudentsFeatureState {
  loadedStudent: StudentModel | null;
  students: Array<StudentModel>;
}

export const initialState: StudentsFeatureState = {
  loadedStudent: null,
  students: [],
};

export const studentsReducer = createReducer(
  initialState,
  on(studentsLoadedAction, (state, { students }) => ({ ...state, students })),
  on(studentLoadedAction,(state, {student}) => ({...state, loadedStudent: student})),
  on(studentCreateAction, (state) => ({...state}))
);
