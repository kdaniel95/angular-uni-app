import { createReducer, on, select } from '@ngrx/store';
import { semesterCreateAction, semesterLoadedAction, semestersLoadedAction } from './semester.actions';
import { SemesterModel } from './semester.model';

export const semestersFeatureKey = 'semestersFeature';

export interface SemestersFeatureState {
  loadedSemester: SemesterModel | null,
  semesters: Array<SemesterModel>;
}

export const initialState: SemestersFeatureState = {
  loadedSemester: null,
  semesters: [],
};

export const semesterReducer = createReducer(
  initialState,
  on(semestersLoadedAction, (state, { semesters }) => ({ ...state, semesters })),
  on(semesterLoadedAction, (state, { semester }) => ({ ...state, loadedSemester: semester })),
  on(semesterCreateAction, (state) => ({...state})),
);
