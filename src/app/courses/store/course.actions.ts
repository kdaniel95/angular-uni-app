import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/data/course.data';

export enum CourseActionTypes {
  coursesRequested = '[Courses] Courses Requested',
  coursesLoaded = '[Courses]  Courses Loaded',
}

export const coursesRequestedAction = createAction(
  CourseActionTypes.coursesRequested
);

export const coursesLoadedAction = createAction(
  CourseActionTypes.coursesLoaded,
  props<{courses: Course[]}>()
);
