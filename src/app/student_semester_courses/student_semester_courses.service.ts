import { StudentSemesterCourse } from 'src/app/data/student_semester_course';
import { StudentSemesterCourseModel } from './store/student_semester_course.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';

const STUDENT_SEMESTER_COURSE_URL = 'api/student_semester_courses';
@Injectable()
export class StudentSemesterCoursesService {
  constructor(private requestService: RequestService) {}

  getStudentSemesterCourses(
    teacherId: number,
    semesterId: number
  ): Observable<StudentSemesterCourse[]> {
    return this.requestService.get<StudentSemesterCourse[]>(
      `${STUDENT_SEMESTER_COURSE_URL}/${teacherId}/${semesterId}`
    );
  }

  createStudentSemesterCourse(studentSemesterCourseModel: StudentSemesterCourseModel): Observable<any>
  {
    return this.requestService.post(`${STUDENT_SEMESTER_COURSE_URL}/`, studentSemesterCourseModel);
  }

  deleteStudentSemesterCourse(id: number):Observable<any>
  {
    return this.requestService.delete(`${STUDENT_SEMESTER_COURSE_URL}/${id}`);
  }
}
