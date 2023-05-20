import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestService } from '../request.service';
import { HttpHeaders } from '@angular/common/http';
import { Semester } from '../data/semester.data';


const SEMESTERS_URL = 'api/semesters';

@Injectable()
export class SemestersService {

  constructor(private requestService: RequestService) { }

  getSemesters(): Observable<Semester[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.requestService.get<Semester[]>(SEMESTERS_URL, httpOptions);
  }
}
