import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Semester } from '../data/semester.data';
import { RequestService } from '../request.service';
import { SemesterModel } from './store/semester.model';

const SEMESTERS_URL = 'api/semesters';

@Injectable()
export class SemestersService {
  constructor(private requestService: RequestService) {}

  getSemesters(): Observable<Semester[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.requestService.get<Semester[]>(SEMESTERS_URL, httpOptions);
  }

  createSemester(semester: SemesterModel): Observable<any> {
    return this.requestService.post(`${SEMESTERS_URL}/`, semester);
  }
}
