import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { StudentsListComponent } from './student-list/students-list.component';
import { StudentsComponent } from './student/student.component';
import { StudentsCreateComponent } from './students-create/students-create.component';
import { StudentsUpdateComponent } from './students-update/students-update.component';
import { Role } from '../data/role.enum';

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
      {
        path: 'create',
        canActivateChild: [AuthGuard],
        data: {role: Role.Admin},
        children: [
          {
            path: '',
            component: StudentsCreateComponent,
          },
        ],
      },
      {
        path: 'edit/:studentId',
        canActivateChild: [AuthGuard],
        data: {role: Role.Admin},
        children: [
          {
            path: '',
            component: StudentsUpdateComponent,
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
