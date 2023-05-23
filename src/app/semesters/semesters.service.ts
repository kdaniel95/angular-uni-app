import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Semester } from '../data/semester.data';
import { RequestService } from '../request.service';

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
}
