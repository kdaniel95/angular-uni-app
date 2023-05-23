import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  StudentSemesterCoursesFeatureState,
  studentSemesterCoursesFeatureKey,
} from './student_semester_course.reducer';

export const selectFeature =
  createFeatureSelector<StudentSemesterCoursesFeatureState>(
    studentSemesterCoursesFeatureKey
  );

export const selectStudentSemesterCourses = createSelector(
  selectFeature,
  (state: StudentSemesterCoursesFeatureState) => {
    return state.studentSemesterCourses;
  }
);
