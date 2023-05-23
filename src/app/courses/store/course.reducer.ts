import { createReducer, on } from '@ngrx/store';
import { coursesLoadedAction } from './course.actions';
import { CourseModel } from './course.model';

export const coursesFeatureKey = 'coursesFeature';

export interface CoursesFeatureState {
  courses: Array<CourseModel>;
}

export const initialState: CoursesFeatureState = {
  courses: [],
};

export const coursesReducer = createReducer(
  initialState,
  on(coursesLoadedAction, (state, { courses }) => ({ ...state, courses }))
);
