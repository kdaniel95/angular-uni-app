// A tantárgyaknak van neve, kódja, kreditértéke (egész szám), felelős tanszéke (pl: VIRT, RSZT, Matematika, stb.).

import { Student, StudentTable } from './student.data';
import { Teacher, TeacherTable } from './teachers.data';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  department: string;
  enrolledStudentIds: number[];
  teacherIds: number[];
  enrolledStudents?: Student[];
  teachers?: Teacher[];
}

export class CourseTable {
  public static _courses: Course[] = [
    {
      id: 1,
      name: 'Introduction to Computer Science',
      code: 'CS101',
      credits: 3,
      department: 'Computer Science',
      enrolledStudentIds: [2, 4],
      teacherIds: [1, 2],
    },
    {
      id: 2,
      name: 'Mathematics for Engineers',
      code: 'ME201',
      credits: 4,
      department: 'Mechanical Engineering',
      enrolledStudentIds: [1, 3],
      teacherIds: [3, 4],
    },
    {
      id: 3,
      name: 'English Composition',
      code: 'ENG110',
      credits: 3,
      department: 'English',
      enrolledStudentIds: [1, 2, 3],
      teacherIds: [1, 3],
    },
    {
      id: 4,
      name: 'Introduction to Psychology',
      code: 'PSY101',
      credits: 3,
      department: 'Psychology',
      enrolledStudentIds: [1, 2, 3, 4],
      teacherIds: [2, 3],
    },
  ];
  public static courses: Course[] = CourseTable._courses.map((course) => {
    let studentsArr: Student[] = [];
    let teachersArr: Teacher[] = [];


    course.enrolledStudentIds.forEach(function (studentId) {
      let student: Student | undefined = StudentTable.students.find(
        (c) => c.id === studentId
      );

      if (student === undefined) {
        return;
      }

      studentsArr.push(student);
    });

    course.teacherIds.forEach(function (teacherId) {
      let teacher: Teacher | undefined = TeacherTable.teachers.find(
        (c) => c.id === teacherId
      );

      if (teacher === undefined) {
        return;
      }

      teachersArr.push(teacher);
    });

    course.enrolledStudents = studentsArr;
    course.teachers = teachersArr;

    return course;
  });
}
