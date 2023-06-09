import { createAction, props } from '@ngrx/store';
import { StudentSemesterCourse } from 'src/app/data/student_semester_course';

export enum StudentSemesterCoursesActionType {
  studentSemesterCoursesRequested = '[StudentSemesterCourse] StudentSemesterCourse Requested',
  studentSemesterCoursesLoaded = '[StudentSemesterCourse] StudentSemesterCourse Loaded',
  studentSemesterCourseCreate = '[StudentSemesterCourse] StudentSemesterCourse Create',
  studentSemesterCourseCreated = '[StudentSemesterCourse] StudentSemesterCourse Created',
  studentSemesterCourseDelete = '[StudentSemesterCourse] StudentSemesterCourse Delete',
  studentSemesterCourseDeleted = '[StudentSemesterCourse] StudentSemesterCourse Deleted',
}

export const studentSemesterCoursesRequestedAction = createAction(
  StudentSemesterCoursesActionType.studentSemesterCoursesRequested,
  props<{ studentId: number; semesterId: number }>()
);

export const studentSemesterCoursesLoadedAction = createAction(
  StudentSemesterCoursesActionType.studentSemesterCoursesLoaded,
  props<{ studentSemesterCourses: StudentSemesterCourse[] }>()
);

export const studentSemesterCourseCreateAction = createAction(
  StudentSemesterCoursesActionType.studentSemesterCourseCreate,
  props<{ studentSemesterCourse: StudentSemesterCourse }>()
);

export const studentSemesterCourseCreatedAction = createAction(
  StudentSemesterCoursesActionType.studentSemesterCourseCreated,
  props<{ studentSemesterCourse: StudentSemesterCourse }>()
);

export const studentSemesterCourseDeleteAction = createAction(
  StudentSemesterCoursesActionType.studentSemesterCourseDelete,
  props<{ id: number }>()
);

export const studentSemesterCourseDeletedAction = createAction(
  StudentSemesterCoursesActionType.studentSemesterCourseDeleted,
  props<{ studentSemesterCourse: StudentSemesterCourse }>()
);
