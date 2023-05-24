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

  getTeacher(id: number): Observable<any>
  {
    return this.requestService.get<Teacher>(`${TEACHERS_URL}/${id}`);
  }

  getTeachers(): Observable<Teacher[]> {
    return this.requestService.get<Teacher[]>(TEACHERS_URL);
  }

  createTeacher(teacher: TeacherModel): Observable<any> {
    return this.requestService.post(`${TEACHERS_URL}/`, teacher);
  }

  updateTeacher(teacher: TeacherModel): Observable<any> {
    return this.requestService.put(`${TEACHERS_URL}/`, teacher);
  }
}
