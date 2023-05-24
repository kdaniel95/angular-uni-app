import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentsFeatureState, studentsFeatureKey } from './student.reducer';
import { StudentModel } from './student.model';

export const selectFeature =
  createFeatureSelector<StudentsFeatureState>(studentsFeatureKey);

export const selectLoadedStudent = createSelector(
  selectFeature,
  (state: StudentsFeatureState) => {
    return state.loadedStudent;
  }
);

export const selectStudents = createSelector(
  selectFeature,
  (state: StudentsFeatureState) => {
    return state.students;
  }
);

export const selectNextStudentId = createSelector(
  selectStudents,
  (students: StudentModel[]) => {
    return students.length + 1;
  }
);
