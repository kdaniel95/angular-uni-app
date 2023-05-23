import { createAction, props } from '@ngrx/store';
import { TeacherSemesterCourse } from 'src/app/data/teacher_semester_course';

export enum TeacherSemesterCoursesActionType {
  teacherSemesterCoursesRequested = '[TeacherSemesterCourse] TeacherSemesterCourse Requested',
  teachersSemesterCoursesLoaded = '[TeacherSemesterCourse] TeacherSemesterCourse Loaded',
}

export const teacherSemesterCoursesRequestedAction = createAction(
  TeacherSemesterCoursesActionType.teacherSemesterCoursesRequested,
  props<{ teacherId: number; semesterId: number }>()
);

export const teachersSemesterCoursesLoadedAction = createAction(
  TeacherSemesterCoursesActionType.teachersSemesterCoursesLoaded,
  props<{ teacherSemesterCourses: TeacherSemesterCourse[] }>()
);
