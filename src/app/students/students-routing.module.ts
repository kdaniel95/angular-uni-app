
import { AuthGuard } from '../auth/auth.guard';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { StudentsComponent } from './student/student.component';
import { StudentsListComponent } from './student-list/students-list.component';

const routes: Routes = [
  { path: '',
    component: StudentsComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      canActivateChild: [AuthGuard],
      children: [
        {
          path: '',
          component: StudentsListComponent
        },
      ]
    }]
  },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: '**', component: StudentsListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
