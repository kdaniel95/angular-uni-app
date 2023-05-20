
import { AuthGuard } from '../auth/auth.guard';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CoursesComponent } from './course/course.component';
import { CoursesListComponent } from './course-list/courses-list.component';

const routes: Routes = [
  { path: '',
    component: CoursesComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      canActivateChild: [AuthGuard],
      children: [
        {
          path: '',
          component: CoursesListComponent
        },
      ]
    }]
  },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: CoursesListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
