import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherSemesterCourse } from '../data/teacher_semester_course';
import { RequestService } from '../request.service';

@Injectable()
export class TeacherSemesterCoursesService {
  [x: string]: any;

  constructor(private requestService: RequestService) {}

  getTeacherSemesterCourses(
    teacherId: number,
    semesterId: number
  ): Observable<TeacherSemesterCourse[]> {
    return this.requestService.get<TeacherSemesterCourse[]>(
      `api/teacher_semester_courses/${teacherId}/${semesterId}`
    );
  }
}
