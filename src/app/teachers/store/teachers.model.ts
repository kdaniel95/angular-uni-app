import { Role } from 'src/app/data/role.enum';
import { Position, Teacher } from '../../data/teachers.data';

export class TeacherModel implements Teacher {
  id: number;
  neptunCode: string;
  name: string;
  email: string;
  position: Position;
  dob: Date;
  department: string;
  roles: Role[];
  [key: string]: any;
}
