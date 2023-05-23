import { Course } from 'src/app/data/course.data';
import { StudentSemesterCourse } from 'src/app/data/student_semester_course';

export class StudentSemesterCourseModel implements StudentSemesterCourse {
  id: number;
  studentId: number;
  studentName?: string | undefined;
  semesterId: number;
  semesterName?: string | undefined;
  courseId: number;
  course?: Course | undefined;
}
