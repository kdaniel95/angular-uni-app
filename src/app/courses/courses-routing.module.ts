import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CoursesListComponent } from './course-list/courses-list.component';
import { CoursesComponent } from './course/course.component';

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
