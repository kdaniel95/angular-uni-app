import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../data/student.data';
import { RequestService } from '../request.service';

const STUDENTS_URL = 'api/students';

@Injectable()
export class StudentsService {
  constructor(private requestService: RequestService) {}

  getStudents(): Observable<Student[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.requestService.get<Student[]>(STUDENTS_URL, httpOptions);
  }
}
