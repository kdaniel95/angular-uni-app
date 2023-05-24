import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/data/course.data';
import { CourseModel } from './course.model';

export enum CourseActionTypes {
  courseRequested = '[Course] Course Requested',
  courseLoaded = '[Course]  Course Loaded',
  coursesRequested = '[Courses] Courses Requested',
  coursesLoaded = '[Courses]  Courses Loaded',
  courseCreate = '[Courses] Course Create',
  courseCreated = '[Courses]  Course Created',
  courseUpdate = '[Course] Course Update',
  courseUpdated = '[Course]  Course Updated',
}

export const courseRequestedAction = createAction(
  CourseActionTypes.courseRequested,
  props<{ id: number }>()
);

export const courseLoadedAction = createAction(
  CourseActionTypes.coursesLoaded,
  props<{ course: CourseModel }>()
);

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

export const courseUpdateAction = createAction(
  CourseActionTypes.courseUpdate,
  props<{ course: CourseModel }>()
);

export const courseUpdatedAction = createAction(
  CourseActionTypes.courseUpdated,
  props<{ course: CourseModel }>()
);
