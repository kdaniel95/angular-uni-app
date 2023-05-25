import { createAction, props } from '@ngrx/store';
import { TeacherSemesterCourse } from 'src/app/data/teacher_semester_course';
import { TeacherSemesterCourseModel } from './teacher_semester_course.model';

export enum TeacherSemesterCoursesActionType {
  teacherSemesterCoursesRequested = '[TeacherSemesterCourse] TeacherSemesterCourse Requested',
  teachersSemesterCoursesLoaded = '[TeacherSemesterCourse] TeacherSemesterCourse Loaded',
  teacherSemesterCourseCreate = '[TeacherSemesterCourse] TeacherSemesterCourse Create',
  teacherSemesterCourseCreated = '[TeacherSemesterCourse] TeacherSemesterCourse Created'
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
