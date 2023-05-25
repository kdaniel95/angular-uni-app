import { Role } from 'src/app/data/role.enum';
import { Major, Student } from 'src/app/data/student.data';

export class StudentModel implements Student {
  id: number;
  neptunCode: string;
  name: string;
  email: string;
  major: Major;
  dob: Date;
  department: string;
  roles: Role[];
  [key: string]: any;
}
