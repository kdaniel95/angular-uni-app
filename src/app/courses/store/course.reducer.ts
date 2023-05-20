import { createReducer, on, Action } from '@ngrx/store';
import { CourseModel } from './course.model';
import { coursesLoadedAction } from './course.actions';

export const coursesFeatureKey = 'coursesFeature';

export interface CoursesFeatureState {
  courses: Array<CourseModel>;
}

export const initialState: CoursesFeatureState = {
  courses: [],
};

export const coursesReducer = createReducer(
  initialState,
  on(coursesLoadedAction, (state, {courses}) => ({...state, courses})),
)
