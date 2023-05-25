import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { StudentSemesterCourseComponent } from './student_semester_course/student_semester_course.component';
import { StudentSemesterCoursesListComponent } from './student_semester_courses-list/student_semester_courses-list.component';
import { StudentSemesterCoursesCreateComponent } from './student-semester-courses-create/student-semester-courses-create.component';

const routes: Routes = [
  {
    path: '',
    component: StudentSemesterCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/student_semester_course',
    pathMatch: 'full'
  },
  {
    path: 'create',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: StudentSemesterCoursesCreateComponent,
      },
    ],
  },
  {
    path: ':studentId/:semesterId',
    component: StudentSemesterCoursesListComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: StudentSemesterCourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentSemesterCourseRoutingModule {}
