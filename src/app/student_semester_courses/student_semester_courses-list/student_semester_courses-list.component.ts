import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { studentSemesterCourseDeleteAction, studentSemesterCoursesRequestedAction } from '../store/student_semester_course.actions';
import { StudentSemesterCourseModel } from '../store/student_semester_course.model';
import { selectStudentSemesterCourses } from '../store/student_semester_course.selectors';
import { AuthService } from 'src/app/auth.service';
import { Role } from 'src/app/data/role.enum';

@Component({
  selector: 'app-student_semester_courses-list',
  templateUrl: './student_semester_courses-list.component.html',
  styleUrls: ['./student_semester_courses-list.component.css'],
})
export class StudentSemesterCoursesListComponent implements OnInit {

  userData: any;

  constructor(private store: Store, private route: ActivatedRoute, auth: AuthService) {
    auth.userData$.subscribe(data => this.userData = data);
  }

  displayedColumns: string[] = ['name', 'code', 'credits', 'department', 'actions'];

  studentSemesterCourses$: Observable<StudentSemesterCourseModel[]> =
    this.store.pipe(select(selectStudentSemesterCourses));

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.route.paramMap.subscribe((params) => {
      const studentId = params.get('studentId') ?? 1;
      const semesterId = params.get('semesterId') ?? 1;

      return this.store.dispatch(
        studentSemesterCoursesRequestedAction({
          studentId: +studentId,
          semesterId: +semesterId,
        })
      );
    });
  }

  onDelete(id: number)
  {
    if(!this.userData['roles'].includes(Role.Admin)){
      return;
    }

    this.store.dispatch(studentSemesterCourseDeleteAction({id}));
    this.loadData();
  }
}
