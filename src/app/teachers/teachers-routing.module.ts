import { TeachersComponent } from "./teachers/teachers.component";
import { AuthGuard } from '../auth/auth.guard';
import { TeachersListComponent } from "./teachers-list/teachers-list.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '',
    component: TeachersComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      canActivateChild: [AuthGuard],
      children: [
        {
          path: '',
          component: TeachersListComponent
        },
      ]
    }]
  },
  { path: '', redirectTo: '/teachers', pathMatch: 'full' },
  { path: '**', component: TeachersListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
