import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestService } from '../request.service';
import { HttpHeaders } from '@angular/common/http';
import { Student } from '../data/student.data';


const STUDENTS_URL = 'api/students';

@Injectable()
export class StudentsService {

  constructor(private requestService: RequestService) { }

  getStudents(): Observable<Student[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.requestService.get<Student[]>(STUDENTS_URL, httpOptions);
  }
}
