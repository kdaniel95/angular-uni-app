import { Course, CourseTable } from './course.data';
import { SemesterTable } from './semester.data';
import { TeacherTable } from './teachers.data';

export interface TeacherSemesterCourse {
  id: number;
  teacherId: number;
  teacherName?: string;
  semesterId: number;
  semesterName?: string;
  courseId: number;
  course?: Course;
}

export class TeacherSemesterCourseTable {
  public static _teacherSemesterCourses: TeacherSemesterCourse[] = [
    {
      id: 1,
      teacherId: 1,
      semesterId: 2,
      courseId: 1,
    },
    {
      id: 2,
      teacherId: 2,
      semesterId: 2,
      courseId: 1,
    },
    {
      id: 3,
      teacherId: 1,
      semesterId: 1,
      courseId: 2,
    },
    {
      id: 3,
      teacherId: 3,
      semesterId: 3,
      courseId: 2,
    },
    {
      id: 4,
      teacherId: 4,
      semesterId: 3,
      courseId: 3,
    },
    {
      id: 4,
      teacherId: 4,
      semesterId: 3,
      courseId: 4,
    },
    {
      id: 5,
      teacherId: 2,
      semesterId: 3,
      courseId: 4,
    },
  ];

  public static teacherSemesterCourses: TeacherSemesterCourse[] =
    this._teacherSemesterCourses.map((tsc) => {
      const teacher = TeacherTable.teachers.find((t) => t.id === tsc.teacherId);
      const semester = SemesterTable.semesters.find(
        (s) => s.id === tsc.semesterId
      );
      const course = CourseTable.courses.find((c) => c.id === tsc.courseId);

      tsc.teacherName = teacher?.name;
      tsc.semesterName = semester?.name;
      tsc.course = course;

      return tsc;
    });
}
