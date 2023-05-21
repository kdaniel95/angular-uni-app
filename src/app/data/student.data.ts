import { CourseTable } from "./course.data";
import { Course } from "./course.data";

// szakoknak fix értékkészlete van: Mérnökinformatikus Msc, Programtervező informatikus Msc, Mérnökinformatikus Bsc, Programtervező informatikus Bsc, Gazdaságinformatikus Bsc.
export enum Major{
  CeMSc = "ceMSc",
  SeMSc = "seMSc",
  CeBSc = "ceBSc",
  SeBSc = "seBSc",
  BiBSc = "biBSc",
}

// A hallgatóknak van Neptun kódja, neve, email címe és szakja.
export interface Student {
  id: number;
  neptunCode: string;
  name: string;
  email: string;
  major: Major;
}

export class StudentTable{
  public static students: Student[] = [
    {
      id: 1,
      neptunCode: "ABC123",
      name: "John Doe",
      email: "john.doe@example.com",
      major: Major.CeMSc,
    },
    {
      id: 2,
      neptunCode: "DEF456",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      major: Major.SeMSc,
    },
    {
      id: 3,
      neptunCode: "GHI789",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      major: Major.BiBSc,
    },
    {
      id: 4,
      neptunCode: "JKL012",
      name: "Bob Anderson",
      email: "bob.anderson@example.com",
      major: Major.CeBSc,
    },
  ];
}
