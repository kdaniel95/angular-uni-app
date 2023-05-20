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

import * as fromCourses from './store/course.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './course/course.component';
import { CoursesListComponent } from './course-list/courses-list.component';
import { CoursesService } from './courses.service';
import { CoursesEffects } from './store/course.effects';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule, CoursesRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(fromCourses.coursesFeatureKey, fromCourses.coursesReducer),
    EffectsModule.forFeature([CoursesEffects]),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    PipesModule
  ],
  declarations: [
    CoursesComponent,
    CoursesListComponent,
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
