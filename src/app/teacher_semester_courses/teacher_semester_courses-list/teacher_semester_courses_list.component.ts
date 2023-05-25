import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { teacherSemesterCourseDeleteAction, teacherSemesterCoursesRequestedAction } from '../store/teacher_semester_course.actions';
import { TeacherSemesterCourseModel } from '../store/teacher_semester_course.model';
import { selectTeacherSemesterCourses } from '../store/teacher_semester_course.selectors';

@Component({
  selector: 'app-teacher_semester_courses-list',
  templateUrl: './teacher_semester_courses-list.component.html',
  styleUrls: ['./teacher_semester_courses-list.component.css'],
})
export class TeacherSemesterCoursesListComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

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
    this.store.dispatch(teacherSemesterCourseDeleteAction({id}));
    this.loadData();
  }
}
