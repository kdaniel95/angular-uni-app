import { Role } from "./role.enum";

export interface User{
  dob: Date;
  name: string;
  neptunCode: string;
  department: string;
  roles: Role[];
}
