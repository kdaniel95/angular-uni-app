import { teachersSemesterCoursesLoadedAction } from './teacher_semester_course.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { TeacherSemesterCourseModel } from './teacher_semester_course-model';

export const teacherSemesterCoursesFeatureKey = 'teacherSemesterCoursesFeature';

export interface TeacherSemesterCoursesFeatureState {
  teacherSemesterCourses: Array<TeacherSemesterCourseModel>;
}

export const initialState: TeacherSemesterCoursesFeatureState = {
  teacherSemesterCourses: [],
};

export const teacherSemesterCoursesReducer = createReducer(
  initialState,
  on(teachersSemesterCoursesLoadedAction, (state, {teacherSemesterCourses}) => ({...state, teacherSemesterCourses})),
)
