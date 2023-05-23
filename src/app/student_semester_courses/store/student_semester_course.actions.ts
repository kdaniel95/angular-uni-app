import { createAction, props } from '@ngrx/store';
import { StudentSemesterCourse } from 'src/app/data/student_semester_course';

export enum StudentSemesterCoursesActionType {
  studentSemesterCoursesRequested = '[StudentSemesterCourse] StudentSemesterCourse Requested',
  studentSemesterCoursesLoaded = '[StudentSemesterCourse] StudentSemesterCourse Loaded',
}

export const studentSemesterCoursesRequestedAction = createAction(
  StudentSemesterCoursesActionType.studentSemesterCoursesRequested,
  props<{ studentId: number; semesterId: number }>()
);

export const studentSemesterCoursesLoadedAction = createAction(
  StudentSemesterCoursesActionType.studentSemesterCoursesLoaded,
  props<{ studentSemesterCourses: StudentSemesterCourse[] }>()
);
