import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoursesFeatureState } from './course.reducer';
import { coursesFeatureKey } from './course.reducer';

export const selectFeature = createFeatureSelector<CoursesFeatureState>(coursesFeatureKey);

export const selectTeachers = createSelector(
  selectFeature,
  (state: CoursesFeatureState) => {
    return state.courses;
  }
)
