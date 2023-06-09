import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MatSortModule } from '@angular/material/sort';
import { EffectsModule } from '@ngrx/effects';
import { CoursesListComponent } from './course-list/courses-list.component';
import { CoursesComponent } from './course/course.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesService } from './courses.service';
import { CoursesEffects } from './store/course.effects';
import * as fromCourses from './store/course.reducer';
import { CoursesCreateComponent } from './courses-create/courses-create.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CoursesUpdateComponent } from './courses-update/courses-update.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(
      fromCourses.coursesFeatureKey,
      fromCourses.coursesReducer
    ),
    EffectsModule.forFeature([CoursesEffects]),
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
  ],
  declarations: [CoursesComponent, CoursesListComponent, CoursesCreateComponent, CoursesUpdateComponent],
  providers: [CoursesService],
})
export class CoursesModule {}
