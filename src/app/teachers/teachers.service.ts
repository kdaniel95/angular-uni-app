import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../data/teachers.data';
import { RequestService } from '../request.service';
import { TeacherModel } from './store/teachers.model';

const TEACHERS_URL = 'api/teachers';

@Injectable()
export class TeachersService {
  constructor(private requestService: RequestService) {}

  getTeachers(): Observable<Teacher[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.requestService.get<Teacher[]>(TEACHERS_URL, httpOptions);
  }

  createTeacher(teacher: TeacherModel): Observable<any> {
    return this.requestService.post(`${TEACHERS_URL}/`, teacher);
  }
}
