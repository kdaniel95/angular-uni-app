import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { TeachersCreateComponent } from './teachers-create/teachers-create.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersUpdateComponent } from './teachers-update/teachers-update.component';
import { Role } from '../data/role.enum';

const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: TeachersListComponent,
          },
          {
            path: 'create',
            component: TeachersCreateComponent,
            data: {role: Role.Admin},
          },
          {
            path: 'edit/:teacherId',
            component: TeachersUpdateComponent,
            data: {role: Role.Admin},
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/teachers', pathMatch: 'full' },
  { path: '**', component: TeachersListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
