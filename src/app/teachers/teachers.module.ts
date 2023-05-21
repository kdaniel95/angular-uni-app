import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { TeachersRoutingModule } from './teachers-routing.module';
import { RouterModule } from '@angular/router';

import * as fromTeachers from './store/teachers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from './store/teachers.effects';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersService } from './teachers.service';
import { TeachersComponent } from './teachers/teachers.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  imports: [
    CommonModule, TeachersRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(fromTeachers.teachersFeatureKey, fromTeachers.teachersReducer),
    EffectsModule.forFeature([TeacherEffects]),
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
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
