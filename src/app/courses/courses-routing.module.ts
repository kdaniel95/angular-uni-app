import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CoursesListComponent } from './course-list/courses-list.component';
import { CoursesComponent } from './course/course.component';
import { CoursesCreateComponent } from './courses-create/courses-create.component';
import { CoursesUpdateComponent } from './courses-update/courses-update.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: CoursesListComponent,
          },
        ],
      },
      {
        path: 'create',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: CoursesCreateComponent,
          },
        ],
      },
      {
        path: 'edit/:courseId',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: CoursesUpdateComponent,
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: CoursesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
