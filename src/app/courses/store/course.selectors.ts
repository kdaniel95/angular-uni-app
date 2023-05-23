import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesFeatureState, coursesFeatureKey } from './course.reducer';

export const selectFeature =
  createFeatureSelector<CoursesFeatureState>(coursesFeatureKey);

export const selectTeachers = createSelector(
  selectFeature,
  (state: CoursesFeatureState) => {
    return state.courses;
  }
);
