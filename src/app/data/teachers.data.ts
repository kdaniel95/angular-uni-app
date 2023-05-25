import { Role } from './role.enum';
import { User } from './user.data';
// docens, adjunktus, mesteroktató, ügyvivő szakértő, tanársegéd, egyéb.
export enum Position {
  AssociateProf = 'associate_prof',
  AssistantProf = 'assistant_prof',
  MasterInstructor = 'master_instructor',
  AdminExpert = 'admin_expert',
  TeachingAssistant = 'teaching_assistant',
  Other = 'other',
}

export const Position2LabelMapping: Record<Position, string> = {
  [Position.AssociateProf]: 'Associate Professor',
  [Position.AssistantProf]: 'Assistant Professor',
  [Position.MasterInstructor]: 'Master Instructor',
  [Position.AdminExpert]: 'Admin Expert',
  [Position.TeachingAssistant]: 'Teaching Assistant',
  [Position.Other]: 'Other',
};

// Az oktatóknak van Neptun kódja, neve, email címe, beosztása.
export interface Teacher extends User {
  id: number;
  neptunCode: string;
  name: string;
  email: string;
  position: Position;
}

export class TeacherTable {
  public static teachers: Teacher[] = [
    {
      id: 1,
      neptunCode: 'ABC123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      position: Position.AssociateProf,
      department: 'Dept 1',
      dob: new Date('1975-01-01'),
      roles: [Role.Teacher]
    },
    {
      id: 2,
      neptunCode: 'DEF456',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      position: Position.AssistantProf,
      department: 'Dept 2',
      dob: new Date('1975-01-01'),
      roles: [Role.Teacher]
    },
    {
      id: 3,
      neptunCode: 'GHI789',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      position: Position.MasterInstructor,
      department: 'Dept 3',
      dob: new Date('1975-01-01'),
      roles: [Role.Admin, Role.Teacher]
    },
    {
      id: 4,
      neptunCode: 'JKL012',
      name: 'Bob Anderson',
      email: 'bob.anderson@example.com',
      position: Position.AdminExpert,
      department: 'Dept 4',
      dob: new Date('1975-01-01'),
      roles: [Role.Admin]
    },
  ];
}
