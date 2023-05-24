import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../data/student.data';
import { RequestService } from '../request.service';
import { StudentModel } from './store/student.model';

const STUDENTS_URL = 'api/students';

@Injectable()
export class StudentsService {
  constructor(private requestService: RequestService) {}

  getStudent(id: number): Observable<any>
  {
    return this.requestService.get<Student>(`${STUDENTS_URL}/${id}`);
  }

  getStudents(): Observable<Student[]> {
    return this.requestService.get<Student[]>(STUDENTS_URL);
  }

  createStudent(student: StudentModel): Observable<any> {
    return this.requestService.post(`${STUDENTS_URL}/`, student);
  }

  updateStudent(student: StudentModel): Observable<any> {
    return this.requestService.put(`${STUDENTS_URL}/`, student);
  }
}
