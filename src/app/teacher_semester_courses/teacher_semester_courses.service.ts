import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherSemesterCourse } from '../data/teacher_semester_course';
import { RequestService } from '../request.service';
import { TeacherSemesterCourseModel } from './store/teacher_semester_course.model';

const TEACHER_SEMESTER_COURSES_URL = 'api/teacher_semester_courses';

@Injectable()
export class TeacherSemesterCoursesService {



  constructor(private requestService: RequestService) {}

  getTeacherSemesterCourses(
    teacherId: number,
    semesterId: number
  ): Observable<TeacherSemesterCourse[]> {
    return this.requestService.get<TeacherSemesterCourse[]>(
      `${TEACHER_SEMESTER_COURSES_URL}/${teacherId}/${semesterId}`
    );
  }

  createTeacherSemesterCourse(teacherSemesterCourse: TeacherSemesterCourseModel): Observable<any> {
    return this.requestService.post(`${TEACHER_SEMESTER_COURSES_URL}/`, teacherSemesterCourse);
  }

  deleteTeacherSemesterCourse(id: number): Observable<any> {
    return this.requestService.delete(`${TEACHER_SEMESTER_COURSES_URL}/${id}`);
  }
}
