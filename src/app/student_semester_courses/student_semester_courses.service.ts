import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentSemesterCourse } from '../data/student_semester_course';
import { RequestService } from '../request.service';

@Injectable()
export class StudentSemesterCoursesService {
  constructor(private requestService: RequestService) {}

  getStudentSemesterCourses(
    teacherId: number,
    semesterId: number
  ): Observable<StudentSemesterCourse[]> {
    return this.requestService.get<StudentSemesterCourse[]>(
      `api/student_semester_courses/${teacherId}/${semesterId}`
    );
  }
}
