import { Semester } from "src/app/data/semester.data";

export class SemesterModel implements Semester
{
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  [key: string]: any;
}
