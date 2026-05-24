import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Role } from '../../shared/enums/role.enum';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  private users: User[] = [
  { id: 1, name: 'Aryan Sharma',  email: 'admin@app.com',   password: 'admin123',  role: Role.Admin,  joinedAt: '2024-01-10' },
  { id: 2, name: 'Priya Mehta',   email: 'pm1@app.com',     password: 'pm123',     role: Role.PM,     joinedAt: '2024-02-15' },
  { id: 3, name: 'Neha Joshi',    email: 'pm2@app.com',     password: 'pm123',     role: Role.PM,     joinedAt: '2024-02-20' },
  { id: 4, name: 'Rohit Verma',   email: 'member1@app.com', password: 'member123', role: Role.Member, joinedAt: '2024-03-01' },
  { id: 5, name: 'Sneha Patil',   email: 'member2@app.com', password: 'member123', role: Role.Member, joinedAt: '2024-03-10' },
  { id: 6, name: 'Aman Gupta',    email: 'member3@app.com', password: 'member123', role: Role.Member, joinedAt: '2024-03-15' },
  { id: 7, name: 'Divya Rathi',   email: 'member4@app.com', password: 'member123', role: Role.Member, joinedAt: '2024-03-20' },
];

  getAll(): User[] { return this.users }
  getById(id: number): User | undefined { return this.users.find(u=> u.id === id) }
  getByRole(role: Role): User | undefined { return this.users.find(u => u.role === role) }

}


