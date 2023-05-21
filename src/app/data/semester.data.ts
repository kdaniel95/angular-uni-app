import { Course, CourseTable } from './course.data';;
// A féléveknek van neve (pl: 2022/23/1), kezdő dátuma és végdátuma.

export interface Semester{
  id: number,
  name: string;
  startDate: Date;
  endDate: Date;
}

export class SemesterTable{
  public static semesters: Semester[] = [
    {
      id: 1,
      name: "2022/23/1",
      startDate: new Date("2022-09-01"),
      endDate: new Date("2023-01-31"),
    },
    {
      id: 2,
      name: "2022/23/2",
      startDate: new Date("2023-02-01"),
      endDate: new Date("2023-06-30"),
    },
    {
      id: 3,
      name: "2023/24/1",
      startDate: new Date("2023-09-01"),
      endDate: new Date("2024-01-31"),
    },
    {
      id: 4,
      name: "2023/24/2",
      startDate: new Date("2024-02-01"),
      endDate: new Date("2024-06-30"),
    },
  ];
}
