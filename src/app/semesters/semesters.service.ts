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

  getSemester(id: number): Observable<any>
  {
    return this.requestService.get<Semester>(`${SEMESTERS_URL}/${id}`);
  }

  getSemesters(): Observable<Semester[]> {
    return this.requestService.get<Semester[]>(SEMESTERS_URL);
  }

  createSemester(semester: SemesterModel): Observable<any> {
    return this.requestService.post(`${SEMESTERS_URL}/`, semester);
  }

  updateSemester(semester:SemesterModel): Observable<any> {
    return this.requestService.put(`${SEMESTERS_URL}/`, semester)
  }
}
