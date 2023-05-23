import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';
import { TeacherSemesterCourse } from 'src/app/data/teacher_semester_course';
import { CourseTable } from './data/course.data';
import { SemesterTable } from './data/semester.data';
import { StudentTable } from './data/student.data';
import {
  StudentSemesterCourse,
  StudentSemesterCourseTable,
} from './data/student_semester_course';
import { TeacherSemesterCourseTable } from './data/teacher_semester_course';
import { TeacherTable } from './data/teachers.data';

@Injectable()
export class InMemoryDatabaseService implements InMemoryDbService {
  constructor() {}

  get(reqInfo: RequestInfo) {
    const urlWithParams = reqInfo.req.urlWithParams;

    if (urlWithParams != null) {
      const ids: Array<number> | undefined = urlWithParams
        .match(/[0-9]+/g)
        ?.map((n) => +n);

      if (ids != null && ids.length > 1) {
        return this.getRelationshipDetails(reqInfo, ids);
      }
    }
    return undefined;
  }

  private getRelationshipDetails(reqInfo: RequestInfo, ids: Array<number>) {
    const entities = reqInfo.collection;

    let data = undefined;

    switch (reqInfo.collectionName) {
      case 'teacher_semester_courses':
        data = entities.filter(
          (entity: TeacherSemesterCourse) =>
            entity.teacherId === ids[0] && entity.semesterId === ids[1]
        );
        break;
      case 'student_semester_courses':
        data = entities.filter(
          (entity: StudentSemesterCourse) =>
            entity.studentId === ids[0] && entity.semesterId === ids[1]
        );
        break;
    }

    const options: any = data
      ? {
          body: data,
          status: STATUS.OK,
          statusText: 'OK!',
          headers: reqInfo.headers,
          url: reqInfo.url,
        }
      : {
          body: { error: `TeacherSemesterCourse with ids='${ids}' not found` },
          status: STATUS.NOT_FOUND,
          statusText: 'ERROR!',
          headers: reqInfo.headers,
          url: reqInfo.url,
        };

    return reqInfo.utils.createResponse$(() => options);
  }

  createDb() {
    const db = {
      teachers: TeacherTable.teachers,
      students: StudentTable.students,
      courses: CourseTable.courses,
      semesters: SemesterTable.semesters,
      teacher_semester_courses:
        TeacherSemesterCourseTable.teacherSemesterCourses,
      student_semester_courses:
        StudentSemesterCourseTable.studentSemesterCourses,
    };
    return db;
  }
}
