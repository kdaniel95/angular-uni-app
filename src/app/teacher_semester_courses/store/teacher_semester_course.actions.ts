import { createAction, props } from '@ngrx/store';
import { TeacherSemesterCourseModel } from './teacher_semester_course.model';

export enum TeacherSemesterCoursesActionType {
  teacherSemesterCoursesRequested = '[TeacherSemesterCourse] TeacherSemesterCourse Requested',
  teachersSemesterCoursesLoaded = '[TeacherSemesterCourse] TeacherSemesterCourse Loaded',
  teacherSemesterCourseCreate = '[TeacherSemesterCourse] TeacherSemesterCourse Create',
  teacherSemesterCourseCreated = '[TeacherSemesterCourse] TeacherSemesterCourse Created',
  teacherSemesterCourseDelete = '[TeacherSemesterCourse] TeacherSemesterCourse Delete',
  teacherSemesterCourseDeleted = '[TeacherSemesterCourse] TeacherSemesterCourse Deleted'
}

export const teacherSemesterCoursesRequestedAction = createAction(
  TeacherSemesterCoursesActionType.teacherSemesterCoursesRequested,
  props<{ teacherId: number; semesterId: number }>()
);

export const teachersSemesterCoursesLoadedAction = createAction(
  TeacherSemesterCoursesActionType.teachersSemesterCoursesLoaded,
  props<{ teacherSemesterCourses: TeacherSemesterCourseModel[] }>()
);

export const teacherSemesterCourseCreateAction = createAction(
  TeacherSemesterCoursesActionType.teacherSemesterCourseCreate,
  props<{ teacherSemesterCourse: TeacherSemesterCourseModel }>()
);

export const teacherSemesterCourseCreatedAction = createAction(
  TeacherSemesterCoursesActionType.teacherSemesterCourseCreated,
  props<{ teacherSemesterCourse: TeacherSemesterCourseModel }>()
);

export const teacherSemesterCourseDeleteAction = createAction(
  TeacherSemesterCoursesActionType.teacherSemesterCourseDelete,
  props<{ id: number }>()
);

export const teacherSemesterCourseDeletedAction = createAction(
  TeacherSemesterCoursesActionType.teacherSemesterCourseDeleted,
  props<{ teacherSemesterCourse: TeacherSemesterCourseModel }>()
);
