import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'teachers',
    loadChildren: () => import('./teachers/teachers.module').then(t => t.TeachersModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(c => c.CoursesModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(s => s.StudentsModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'semesters',
    loadChildren: () => import('./semesters/semesters.module').then(s => s.SemestersModule),
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
