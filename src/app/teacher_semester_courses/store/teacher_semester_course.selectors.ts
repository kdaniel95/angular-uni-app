import { TeacherSemesterCoursesFeatureState, teacherSemesterCoursesFeatureKey } from './teacher_semester_course.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectFeature = createFeatureSelector<TeacherSemesterCoursesFeatureState>(teacherSemesterCoursesFeatureKey);

export const selectTeacherSemesterCourses = createSelector(
  selectFeature,
  (state: TeacherSemesterCoursesFeatureState) => {
    return state.teacherSemesterCourses;
  }
)
