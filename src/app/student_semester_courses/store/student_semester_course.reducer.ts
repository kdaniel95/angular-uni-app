import { createReducer, on } from '@ngrx/store';
import { studentSemesterCoursesLoadedAction } from './student_semester_course.actions';
import { StudentSemesterCourseModel } from './student_semester_course.model';

export const studentSemesterCoursesFeatureKey = 'studentSemesterCoursesFeature';

export interface StudentSemesterCoursesFeatureState {
  studentSemesterCourses: Array<StudentSemesterCourseModel>;
}

export const initialState: StudentSemesterCoursesFeatureState = {
  studentSemesterCourses: [],
};

export const teacherSemesterCoursesReducer = createReducer(
  initialState,
  on(
    studentSemesterCoursesLoadedAction,
    (state, { studentSemesterCourses }) => ({
      ...state,
      studentSemesterCourses,
    })
  )
);
