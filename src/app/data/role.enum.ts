export enum Role
{
  Admin = 'Admin',
  Teacher = 'Teacher',
  Student = 'Student'
}

export const Role2LabelMapping: Record<Role, string> = {
  [Role.Admin]: 'Admin',
  [Role.Teacher]: 'Teacher',
  [Role.Student]: 'Student',
};
