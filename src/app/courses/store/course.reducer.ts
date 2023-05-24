import { createReducer, on } from '@ngrx/store';
import { courseCreateAction, courseLoadedAction, coursesLoadedAction } from './course.actions';
import { CourseModel } from './course.model';

export const coursesFeatureKey = 'coursesFeature';

export interface CoursesFeatureState {
  loadedCourse: CourseModel | null;
  courses: Array<CourseModel>;
}

export const initialState: CoursesFeatureState = {
  loadedCourse: null,
  courses: [],
};

export const coursesReducer = createReducer(
  initialState,
  on(coursesLoadedAction, (state, { courses }) => ({ ...state, courses })),
  on(courseLoadedAction, (state, { course }) => ({ ...state, loadedCourse: course })),
  on(courseCreateAction, (state) => ({...state})),
);
