import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TeachersFeatureState, teachersFeatureKey } from './teachers.reducer';
import { TeacherModel } from './teachers.model';

export const selectFeature =
  createFeatureSelector<TeachersFeatureState>(teachersFeatureKey);

export const selectTeachers = createSelector(
  selectFeature,
  (state: TeachersFeatureState) => {
    return state.teachers;
  }
);

export const selectLoadedTeacher = createSelector(
  selectFeature,
  (state: TeachersFeatureState) => {
    return state.loadedTeacher;
  }
)

export const selectNextTeacherId = createSelector(
  selectTeachers,
  (teachers: TeacherModel[]) => {
    return teachers.length + 1;
  }
);
