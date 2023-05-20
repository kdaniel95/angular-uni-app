import { Course } from "src/app/data/course.data";
import { Student } from "src/app/data/student.data";
import { Teacher } from "src/app/data/teachers.data";

export class CourseModel implements Course
{
  id: number;
  name: string;
  code: string;
  credits: number;
  department: string;
  enrolledStudentIds: number[];
  teacherIds: number[];
  enrolledStudents?: Student[] | undefined;
  teachers?: Teacher[] | undefined;
}
