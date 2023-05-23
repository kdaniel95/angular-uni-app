import { TeacherSemesterCourse } from 'src/app/data/teacher_semester_course';

export class TeacherSemesterCourseModel implements TeacherSemesterCourse {
  id: number;
  teacherId: number;
  teacherName?: string | undefined;
  semesterId: number;
  semesterName?: string | undefined;
  courseId: number;
  courseName?: string | undefined;
}
