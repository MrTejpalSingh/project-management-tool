import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Role } from '../../shared/enums/role.enum';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter email and password.';
      return;
    }
    const success = this.authService.login(this.email, this.password);

    if (success) {
      const role = this.authService.getRole();
      
      if (role === Role.Admin)       this.router.navigate(['/admin/dashboard']);
      else if (role === Role.PM)     this.router.navigate(['/pm/dashboard']);
      else if (role === Role.Member) this.router.navigate(['/member/dashboard']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
