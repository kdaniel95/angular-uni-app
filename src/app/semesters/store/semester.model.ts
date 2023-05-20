import { Course } from "src/app/data/course.data";
import { Semester } from "src/app/data/semester.data";

export class SemesterModel implements Semester
{
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  courseIds: number[];
  courses?: Course[] | undefined;
}
