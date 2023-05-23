import { Course, CourseTable } from './course.data';
import { SemesterTable } from './semester.data';
import { TeacherTable } from './teachers.data';

export interface StudentSemesterCourse {
  id: number;
  studentId: number;
  studentName?: string;
  semesterId: number;
  semesterName?: string;
  courseId: number;
  course?: Course;
}

export class StudentSemesterCourseTable {
  public static _studentSemesterCourses: StudentSemesterCourse[] = [
    {
      id: 1,
      studentId: 1,
      semesterId: 2,
      courseId: 1,
    },
    {
      id: 2,
      studentId: 2,
      semesterId: 2,
      courseId: 1,
    },
    {
      id: 3,
      studentId: 1,
      semesterId: 1,
      courseId: 2,
    },
    {
      id: 3,
      studentId: 3,
      semesterId: 3,
      courseId: 2,
    },
    {
      id: 4,
      studentId: 4,
      semesterId: 3,
      courseId: 3,
    },
    {
      id: 4,
      studentId: 4,
      semesterId: 3,
      courseId: 4,
    },
    {
      id: 5,
      studentId: 2,
      semesterId: 3,
      courseId: 4,
    },
    {
      id: 6,
      studentId: 1,
      semesterId: 2,
      courseId: 3,
    },
  ];

  public static studentSemesterCourses: StudentSemesterCourse[] =
    this._studentSemesterCourses.map((tsc) => {
      const student = TeacherTable.teachers.find((s) => s.id === tsc.studentId);
      const semester = SemesterTable.semesters.find(
        (s) => s.id === tsc.semesterId
      );
      const course = CourseTable.courses.find((c) => c.id === tsc.courseId);

      tsc.studentName = student?.name;
      tsc.semesterName = semester?.name;
      tsc.course = course;

      return tsc;
    });
}
