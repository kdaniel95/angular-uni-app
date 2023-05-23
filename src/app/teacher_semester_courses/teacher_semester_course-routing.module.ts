import { AuthGuard } from '../auth/auth.guard';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TeacherSemesterCourseComponent } from './teacher_semester_course/teacher_semester_course.component';
import { TeacherSemesterCoursesListComponent } from './teacher_semester_courses-list/teacher_semester_courses_list.component';

const routes: Routes = [
  { path: '',
    component: TeacherSemesterCourseComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/teacher_semester_course', pathMatch: 'full' },
  { path: ':teacherId/:semesterId', component: TeacherSemesterCoursesListComponent},
  { path: '**', component: TeacherSemesterCourseComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeacherSemesterCourseRoutingModule { }
