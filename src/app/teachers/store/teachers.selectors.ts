import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TeachersFeatureState } from './teachers.reducer';
import { teachersFeatureKey } from './teachers.reducer';

export const selectFeature = createFeatureSelector<TeachersFeatureState>(teachersFeatureKey);

export const selectTeachers = createSelector(
  selectFeature,
  (state: TeachersFeatureState) => {
    return state.teachers;
  }
)
