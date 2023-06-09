import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MatSortModule } from '@angular/material/sort';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './store/student.effects';
import * as fromStudents from './store/student.reducer';
import { StudentsListComponent } from './student-list/students-list.component';
import { StudentsComponent } from './student/student.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsService } from './students.service';
import { StudentsCreateComponent } from './students-create/students-create.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { StudentsUpdateComponent } from './students-update/students-update.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(
      fromStudents.studentsFeatureKey,
      fromStudents.studentsReducer
    ),
    EffectsModule.forFeature([StudentsEffects]),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  declarations: [StudentsComponent, StudentsListComponent, StudentsCreateComponent, StudentsUpdateComponent],
  providers: [StudentsService],
})
export class StudentsModule {}
