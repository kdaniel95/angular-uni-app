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
import { TeachersRoutingModule } from './teachers-routing.module';
import { RouterModule } from '@angular/router';

import * as fromTeachers from './store/teachers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from './store/teachers.effects';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersService } from './teachers.service';
import { TeachersComponent } from './teachers/teachers.component';


@NgModule({
  imports: [
    CommonModule, TeachersRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(fromTeachers.teachersFeatureKey, fromTeachers.teachersReducer),
    EffectsModule.forFeature([TeacherEffects]),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  declarations: [
    TeachersComponent,
    TeachersListComponent,
  ],
  providers: [
    TeachersService
  ]
})
export class TeachersModule { }
