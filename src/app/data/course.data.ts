// A tantárgyaknak van neve, kódja, kreditértéke (egész szám), felelős tanszéke (pl: VIRT, RSZT, Matematika, stb.).

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  department: string;
}

export class CourseTable {
  public static courses: Course[] = [
    {
      id: 1,
      name: 'Introduction to Computer Science',
      code: 'CS101',
      credits: 3,
      department: 'Computer Science',
    },
    {
      id: 2,
      name: 'Mathematics for Engineers',
      code: 'ME201',
      credits: 4,
      department: 'Mechanical Engineering',
    },
    {
      id: 3,
      name: 'English Composition',
      code: 'ENG110',
      credits: 3,
      department: 'English',
    },
    {
      id: 4,
      name: 'Introduction to Psychology',
      code: 'PSY101',
      credits: 3,
      department: 'Psychology',
    },
  ];
}
