import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { SemestersListComponent } from './semester-list/semesters-list.component';
import { SemestersComponent } from './semester/semester.component';
import { SemestersCreateComponent } from './semesters-create/semesters-create.component';
import { SemestersUpdateComponent } from './semesters-update/semesters-update.component';

const routes: Routes = [
  {
    path: '',
    component: SemestersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: SemestersListComponent,
          },
        ],
      },
      {
        path: 'create',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: SemestersCreateComponent,
          },
        ],
      },
      {
        path: 'edit/:semesterId',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: SemestersUpdateComponent,
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/semesters', pathMatch: 'full' },
  { path: '**', component: SemestersListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemestersRoutingModule {}
