import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentsFeatureState, studentsFeatureKey } from './student.reducer';

export const selectFeature =
  createFeatureSelector<StudentsFeatureState>(studentsFeatureKey);

export const selectStudents = createSelector(
  selectFeature,
  (state: StudentsFeatureState) => {
    return state.students;
  }
);
