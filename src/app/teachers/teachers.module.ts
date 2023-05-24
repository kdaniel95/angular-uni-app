import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TeachersRoutingModule } from './teachers-routing.module';

import { MatSortModule } from '@angular/material/sort';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from './store/teachers.effects';
import * as fromTeachers from './store/teachers.reducer';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersService } from './teachers.service';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersCreateComponent } from './teachers-create/teachers-create.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(
      fromTeachers.teachersFeatureKey,
      fromTeachers.teachersReducer
    ),
    EffectsModule.forFeature([TeacherEffects]),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
  ],
  declarations: [TeachersComponent, TeachersListComponent, TeachersCreateComponent],
  providers: [TeachersService],
})
export class TeachersModule {}
