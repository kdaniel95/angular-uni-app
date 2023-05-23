import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { StudentsListComponent } from './student-list/students-list.component';
import { StudentsComponent } from './student/student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: StudentsListComponent,
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: '**', component: StudentsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
