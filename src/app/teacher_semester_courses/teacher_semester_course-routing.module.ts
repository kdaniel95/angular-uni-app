import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { TeacherSemesterCourseComponent } from './teacher_semester_course/teacher_semester_course.component';
import { TeacherSemesterCoursesListComponent } from './teacher_semester_courses-list/teacher_semester_courses_list.component';
import { TeacherSemesterCoursesCreateComponent } from './teacher-semester-courses-create/teacher-semester-courses-create.component';
import { Role } from '../data/role.enum';

const routes: Routes = [
  {
    path: '',
    component: TeacherSemesterCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/teacher_semester_course',
    pathMatch: 'full'
  },
  {
    path: 'create',
    canActivateChild: [AuthGuard],
    data: {role: Role.Admin},
    children: [
      {
        path: '',
        component: TeacherSemesterCoursesCreateComponent,
      },
    ],
  },
  {
    path: ':teacherId/:semesterId',
    component: TeacherSemesterCoursesListComponent,
  },
  {
    path: '**',
    component: TeacherSemesterCourseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSemesterCourseRoutingModule {}
