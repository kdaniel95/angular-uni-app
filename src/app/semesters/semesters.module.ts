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

import * as fromSemesters from './store/semester.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SemestersComponent } from './semester/semester.component';
import { SemestersListComponent } from './semester-list/semesters-list.component';
import { SemesterEffects } from './store/semester.effects';
import { SemestersService } from './semesters.service';
import { SemestersRoutingModule } from './semesters-routing.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule, SemestersRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(fromSemesters.semestersFeatureKey, fromSemesters.semesterReducer),
    EffectsModule.forFeature([SemesterEffects]),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    PipesModule
  ],
  declarations: [
    SemestersComponent,
    SemestersListComponent,
  ],
  providers: [
    SemestersService
  ]
})
export class SemestersModule { }
