import { Position, Teacher } from '../../data/teachers.data';

export class TeacherModel implements Teacher {
  id: number;
  neptunCode: string;
  name: string;
  email: string;
  position: Position;
  [key: string]: any;
}
