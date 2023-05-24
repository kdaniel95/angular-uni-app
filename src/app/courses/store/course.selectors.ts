import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesFeatureState, coursesFeatureKey } from './course.reducer';
import { CourseModel } from './course.model';

export const selectFeature =
  createFeatureSelector<CoursesFeatureState>(coursesFeatureKey);

export const selectLoadedCourse = createSelector(
  selectFeature,
  (state: CoursesFeatureState) => {
    return state.loadedCourse;
  }
);

export const selectCourses = createSelector(
  selectFeature,
  (state: CoursesFeatureState) => {
    return state.courses;
  }
);

export const selectNextCourseId = createSelector(
  selectCourses,
  (courses: CourseModel[]) => {
    return courses.length+1;
  }
);
