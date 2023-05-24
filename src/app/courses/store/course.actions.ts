import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/data/course.data';

export enum CourseActionTypes {
  coursesRequested = '[Courses] Courses Requested',
  coursesLoaded = '[Courses]  Courses Loaded',
  courseCreate = '[Courses] Course Create',
  courseCreated = '[Courses]  Course Created',
}

export const coursesRequestedAction = createAction(
  CourseActionTypes.coursesRequested
);

export const coursesLoadedAction = createAction(
  CourseActionTypes.coursesLoaded,
  props<{ courses: Course[] }>()
);

export const courseCreateAction = createAction(
  CourseActionTypes.courseCreate,
  props<{ course: Course }>()
);

export const courseCreatedAction = createAction(
  CourseActionTypes.courseCreated,
  props<{ course: Course }>()
);
