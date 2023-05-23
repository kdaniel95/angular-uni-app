import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../data/course.data';
import { RequestService } from '../request.service';

const COURSES_URL = 'api/courses';

@Injectable()
export class CoursesService {
  constructor(private requestService: RequestService) {}

  getCourses(): Observable<Course[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.requestService.get<Course[]>(COURSES_URL, httpOptions);
  }
}
