// docens, adjunktus, mesteroktató, ügyvivő szakértő, tanársegéd, egyéb.
export enum Position {
  AssociateProf = 'associate_prof',
  AssistantProf = 'assistant_prof',
  MasterInstructor = 'master_instructor',
  AdminExpert = 'admin_expert',
  TeachingAssistant = 'teaching_assistant',
  Other = 'other',
}

// Az oktatóknak van Neptun kódja, neve, email címe, beosztása.
export interface Teacher {
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
    },
    {
      id: 2,
      neptunCode: 'DEF456',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      position: Position.AssistantProf,
    },
    {
      id: 3,
      neptunCode: 'GHI789',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      position: Position.MasterInstructor,
    },
    {
      id: 4,
      neptunCode: 'JKL012',
      name: 'Bob Anderson',
      email: 'bob.anderson@example.com',
      position: Position.AdminExpert,
    },
  ];
}
