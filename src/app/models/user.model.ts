import { Role } from "../shared/enums/role.enum";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  avatar?: string;
  joinedAt: string;
}