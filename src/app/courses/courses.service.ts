import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestService } from '../request.service';
import { HttpHeaders } from '@angular/common/http';
import { Course } from '../data/course.data';


const COURSES_URL = 'api/courses';

@Injectable()
export class CoursesService {

  constructor(private requestService: RequestService) { }

  getCourses(): Observable<Course[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.requestService.get<Course[]>(COURSES_URL, httpOptions);
  }
}
