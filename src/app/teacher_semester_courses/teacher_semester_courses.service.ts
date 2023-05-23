import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestService } from '../request.service';
import { TeacherSemesterCourse } from '../data/teacher_semester_course';

@Injectable()
export class TeacherSemesterCoursesService {

  constructor(private requestService: RequestService) { }

  getTeacherSemesterCourses(teacherId: number, semesterId: number): Observable<TeacherSemesterCourse[]> {
    return this.requestService.get<TeacherSemesterCourse[]>(`api/teacher_semester_courses/${teacherId}/${semesterId}`);
  }
}
