import { createReducer, on } from '@ngrx/store';
import { semestersLoadedAction } from './semester.actions';
import { SemesterModel } from './semester.model';

export const semestersFeatureKey = 'semestersFeature';

export interface SemestersFeatureState {
  semesters: Array<SemesterModel>;
}

export const initialState: SemestersFeatureState = {
  semesters: [],
};

export const semesterReducer = createReducer(
  initialState,
  on(semestersLoadedAction, (state, { semesters }) => ({ ...state, semesters }))
);
