import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TeacherSemesterCoursesFeatureState,
  teacherSemesterCoursesFeatureKey,
} from './teacher_semester_course.reducer';

export const selectFeature =
  createFeatureSelector<TeacherSemesterCoursesFeatureState>(
    teacherSemesterCoursesFeatureKey
  );

export const selectTeacherSemesterCourses = createSelector(
  selectFeature,
  (state: TeacherSemesterCoursesFeatureState) => {
    return state.teacherSemesterCourses;
  }
);
