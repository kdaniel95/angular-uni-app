import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
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
  {
    path: 'teacher_semester_course',
    loadChildren: () => import('./teacher_semester_courses/teacher_semester_course.module').then(tsc => tsc.TeacherSemesterCourseModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'student_semester_course',
    loadChildren: () => import('./student_semester_courses/student_semester_course.module').then(scc => scc.StudentSemesterCourseModule),
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
