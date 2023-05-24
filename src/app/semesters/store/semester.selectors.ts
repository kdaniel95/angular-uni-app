import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SemestersFeatureState, semestersFeatureKey } from './semester.reducer';

export const selectFeature =
  createFeatureSelector<SemestersFeatureState>(semestersFeatureKey);

export const selectSemesters = createSelector(
  selectFeature,
  (state: SemestersFeatureState) => {
    return state.semesters;
  }
);

export const selectNextSemesterId = createSelector(
  selectSemesters,
  (semesters) => {
    return semesters.length+1;
  }
);
