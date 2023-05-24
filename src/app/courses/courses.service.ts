import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../data/course.data';
import { RequestService } from '../request.service';
import { CourseModel } from './store/course.model';

const COURSES_URL = 'api/courses';

@Injectable()
export class CoursesService {
  constructor(private requestService: RequestService) {}

  getCourse(id: number): Observable<any>
  {
    return this.requestService.get<Course>(`${COURSES_URL}/${id}`);
  }

  getCourses(): Observable<Course[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.requestService.get<Course[]>(COURSES_URL, httpOptions);
  }

  createCourse(course: CourseModel): Observable<any> {
    return this.requestService.post(`${COURSES_URL}/`, course);
  }

  updateCourse(course: CourseModel): Observable<any> {
    return this.requestService.put(`${COURSES_URL}/`, course);
  }
}
