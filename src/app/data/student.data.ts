import { Role } from "./role.enum";
import { User } from "./user.data";

// szakoknak fix értékkészlete van: Mérnökinformatikus Msc, Programtervező informatikus Msc, Mérnökinformatikus Bsc, Programtervező informatikus Bsc, Gazdaságinformatikus Bsc.
export enum Major {
  CeMSc = 'ceMSc',
  SeMSc = 'seMSc',
  CeBSc = 'ceBSc',
  SeBSc = 'seBSc',
  BiBSc = 'biBSc',
}

export const Major2LabelMapping: Record<Major, string> = {
  [Major.CeMSc]: 'Computer Engineering MSc',
  [Major.SeMSc]: 'Systems Engineering MSc',
  [Major.CeBSc]: 'Computer Engineering BSc',
  [Major.SeBSc]: 'Systems Engineering BSc',
  [Major.BiBSc]: 'Business Informatics BSc',
};


// A hallgatóknak van Neptun kódja, neve, email címe és szakja.
export interface Student extends User {
  id: number;
  neptunCode: string;
  name: string;
  email: string;
  major: Major;
}

export class StudentTable {
  public static students: Student[] = [
    {
      id: 1,
      neptunCode: 'ABC123',
      dob: new Date('2000-03-05'),
      name: 'John Doe',
      email: 'john.doe@example.com',
      major: Major.CeMSc,
      department: 'unknown',
      roles: [Role.Student]
    },
    {
      id: 2,
      neptunCode: 'DEF456',
      dob: new Date('2000-03-05'),
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      major: Major.SeMSc,
      department: 'unknown',
      roles: [Role.Student]
    },
    {
      id: 3,
      neptunCode: 'GHI789',
      dob: new Date('2000-03-05'),
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      major: Major.BiBSc,
      department: 'unknown',
      roles: [Role.Student]
    },
    {
      id: 4,
      neptunCode: 'JKL012',
      dob: new Date('2000-03-05'),
      name: 'Bob Anderson',
      email: 'bob.anderson@example.com',
      major: Major.CeBSc,
      department: 'unknown',
      roles: [Role.Student]
    },
  ];
}
