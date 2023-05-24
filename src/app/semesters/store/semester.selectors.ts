import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SemestersFeatureState, semestersFeatureKey } from './semester.reducer';
import { SemesterModel } from './semester.model';

export const selectFeature =
  createFeatureSelector<SemestersFeatureState>(semestersFeatureKey);

  export const selectLoadedSemester = createSelector(
    selectFeature,
    (state: SemestersFeatureState) => {
      return state.loadedSemester;
    }
  );

export const selectSemesters = createSelector(
  selectFeature,
  (state: SemestersFeatureState) => {
    return state.semesters;
  }
);

export const selectNextSemesterId = createSelector(
  selectSemesters,
  (semesters: SemesterModel[]) => {
    return semesters.length+1;
  }
);
