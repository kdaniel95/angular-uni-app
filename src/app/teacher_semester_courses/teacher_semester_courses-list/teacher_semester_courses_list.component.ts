import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { teacherSemesterCourseDeleteAction, teacherSemesterCoursesRequestedAction } from '../store/teacher_semester_course.actions';
import { TeacherSemesterCourseModel } from '../store/teacher_semester_course.model';
import { selectTeacherSemesterCourses } from '../store/teacher_semester_course.selectors';
import { AuthService } from 'src/app/auth.service';
import { Role } from 'src/app/data/role.enum';

@Component({
  selector: 'app-teacher_semester_courses-list',
  templateUrl: './teacher_semester_courses-list.component.html',
  styleUrls: ['./teacher_semester_courses-list.component.css'],
})
export class TeacherSemesterCoursesListComponent implements OnInit {

  userData:any;

  constructor(private store: Store, private route: ActivatedRoute, auth: AuthService) {
    auth.userData$.subscribe(data => this.userData = data);
  }

  displayedColumns: string[] = ['name', 'code', 'credits', 'department', 'actions'];

  teachersSemesterCourses$: Observable<TeacherSemesterCourseModel[]> =
    this.store.pipe(select(selectTeacherSemesterCourses));

  loadData()
  {
    this.route.paramMap.subscribe((params) => {
      const teacherId = params.get('teacherId') ?? 1;
      const semesterId = params.get('semesterId') ?? 1;

      return this.store.dispatch(
        teacherSemesterCoursesRequestedAction({
          teacherId: +teacherId,
          semesterId: +semesterId,
        })
      );
    });
  }

  ngOnInit() {
    this.loadData();
  }

  onDelete(id: number){
    if(!this.userData['roles'].includes(Role.Admin)){
      return;
    }

    this.store.dispatch(teacherSemesterCourseDeleteAction({id}));
    this.loadData();
  }
}
