
import { AuthGuard } from '../auth/auth.guard';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SemestersComponent } from './semester/semester.component';
import { SemestersListComponent } from './semester-list/semesters-list.component';

const routes: Routes = [
  { path: '',
    component: SemestersComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      canActivateChild: [AuthGuard],
      children: [
        {
          path: '',
          component: SemestersListComponent
        },
      ]
    }]
  },
  { path: '', redirectTo: '/semesters', pathMatch: 'full' },
  { path: '**', component: SemestersListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SemestersRoutingModule { }
