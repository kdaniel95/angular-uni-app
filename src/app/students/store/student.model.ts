import { Major, Student } from "src/app/data/student.data";

export class StudentModel implements Student
{
  id: number;
  neptunCode: string;
  name: string;
  email: string;
  major: Major;
  courseIds: number[];
}
