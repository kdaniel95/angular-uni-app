import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import * as fromStudents from './store/student.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './store/student.effects';
import { StudentsComponent } from './student/student.component';
import { StudentsListComponent } from './student-list/students-list.component';
import { StudentsService } from './students.service';
import { StudentsRoutingModule } from './students-routing.module';


@NgModule({
  imports: [
    CommonModule, StudentsRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(fromStudents.studentsFeatureKey, fromStudents.studentsReducer),
    EffectsModule.forFeature([StudentsEffects]),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  declarations: [
    StudentsComponent,
    StudentsListComponent,
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
