import { Course, CourseTable } from './course.data';;
// A féléveknek van neve (pl: 2022/23/1), kezdő dátuma és végdátuma.

export interface Semester{
  id: number,
  name: string;
  startDate: Date;
  endDate: Date;
  courseIds: number[];
  courses?: Course[]
}

export class SemesterTable{
  public static _semesters: Semester[] = [
    {
      id: 1,
      name: "2022/23/1",
      startDate: new Date("2022-09-01"),
      endDate: new Date("2023-01-31"),
      courseIds: [1,2,3]
    },
    {
      id: 2,
      name: "2022/23/2",
      startDate: new Date("2023-02-01"),
      endDate: new Date("2023-06-30"),
      courseIds: [1,3,4]
    },
    {
      id: 3,
      name: "2023/24/1",
      startDate: new Date("2023-09-01"),
      endDate: new Date("2024-01-31"),
      courseIds: [2,3,4]
    },
    {
      id: 4,
      name: "2023/24/2",
      startDate: new Date("2024-02-01"),
      endDate: new Date("2024-06-30"),
      courseIds: [1,2]
    },
  ];
  public static semesters: Semester[] = SemesterTable._semesters.map(semester => {
    let coursesArr: Course[] = [];

    semester.courseIds.forEach(function(courseId){
      let course: Course | undefined = CourseTable.courses.find(c => c.id === courseId);

      if(course === undefined){
        return;
      }

      coursesArr.push(course)
    });

    semester.courses = coursesArr;

    return semester;
  });
}
