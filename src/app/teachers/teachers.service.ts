import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';
import { HttpHeaders } from '@angular/common/http';
import { Teacher } from '../data/teachers.data';


const TEACHERS_URL = 'api/teachers';

@Injectable()
export class TeachersService {

  constructor(private requestService: RequestService) { }

  getTeachers(): Observable<Teacher[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.requestService.get<Teacher[]>(TEACHERS_URL, httpOptions);
  }
}
