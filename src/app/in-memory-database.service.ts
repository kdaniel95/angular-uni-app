import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { StudentTable } from './data/student.data';
import { TeacherTable } from './data/teachers.data';
import { CourseTable } from './data/course.data';
import { SemesterTable } from './data/semester.data';

@Injectable()
export class InMemoryDatabaseService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const db = {
      teachers: TeacherTable.teachers,
      students: StudentTable.students,
      courses: CourseTable.courses,
      semesters: SemesterTable.semesters
    }
    return db;
  }

}
