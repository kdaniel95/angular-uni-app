import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { SemestersListComponent } from './semester-list/semesters-list.component';
import { SemestersComponent } from './semester/semester.component';
import { SemestersCreateComponent } from './semesters-create/semesters-create.component';
import { SemestersRoutingModule } from './semesters-routing.module';
import { SemestersService } from './semesters.service';
import { SemesterEffects } from './store/semester.effects';
import * as fromSemesters from './store/semester.reducer';

@NgModule({
  imports: [
    CommonModule,
    SemestersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(
      fromSemesters.semestersFeatureKey,
      fromSemesters.semesterReducer
    ),
    EffectsModule.forFeature([SemesterEffects]),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  declarations: [
    SemestersComponent,
    SemestersListComponent,
    SemestersCreateComponent,
  ],
  providers: [SemestersService],
})
export class SemestersModule {}
