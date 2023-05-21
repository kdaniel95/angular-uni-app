import { Course } from "src/app/data/course.data";

export class CourseModel implements Course
{
  id: number;
  name: string;
  code: string;
  credits: number;
  department: string;
  [key: string]: any;
}
