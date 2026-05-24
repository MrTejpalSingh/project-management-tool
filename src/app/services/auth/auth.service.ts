import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Role } from '../../shared/enums/role.enum';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUser: User | null = null;
  private readonly SESSION_CURRENT_USER_KEY = 'currentUser'

  constructor(private userService: UserService){}

  ngOnInit(){
    this.loadFromSession();
  }

  loadFromSession(){
    const savedData = sessionStorage.getItem(this.SESSION_CURRENT_USER_KEY);
    if(savedData){
      this.currentUser = JSON.parse(savedData);
    }
  }

  login(email: string, password: string): boolean {
    const user = this.userService.getAll().find(u=> u.email === email && u.password === password)
    if(user){
      const {password, ...safeUSer} = user;
      sessionStorage.setItem(this.SESSION_CURRENT_USER_KEY,JSON.stringify(safeUSer))
      this.currentUser = user;
      return true;
    }
    return false;
  }

    logout(): void {
    this.currentUser = null;
    sessionStorage.removeItem(this.SESSION_CURRENT_USER_KEY);
  }

  getCurrentUser(): User | null{ return this.currentUser;}
  getRole(): Role | undefined{ return this.currentUser?.role }
  isLoggedIn(): boolean { return this.currentUser !== null}
  
}
