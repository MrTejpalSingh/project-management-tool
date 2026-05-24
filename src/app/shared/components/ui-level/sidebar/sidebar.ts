import { Component } from '@angular/core';
import { Role } from '../../../enums/role.enum';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface SidebarLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {


  role: Role | undefined = undefined;
  links: SidebarLink[] = [];

  adminLinks: SidebarLink[] = [
    { label: 'Dashboard',    route: '/admin/dashboard'    },
    { label: 'Projects',     route: '/admin/projects'     },
    { label: 'Tasks',        route: '/admin/tasks'        },
    { label: 'Users',        route: '/admin/users'        },
    { label: 'Activity Log', route: '/admin/activity-log' },
    { label: 'Notifications',route: '/admin/notifications'},
    { label: 'Settings',     route: '/admin/settings'     },
  ];

  pmLinks: SidebarLink[] = [
    { label: 'Dashboard',    route: '/pm/dashboard'    },
    { label: 'Projects',     route: '/pm/projects'     },
    { label: 'Tasks',        route: '/pm/tasks'        },
    { label: 'Activity Log', route: '/pm/activity-log' },
    { label: 'Notifications',route: '/pm/notifications'},
  ];

  memberLinks: SidebarLink[] = [
    { label: 'Dashboard',    route: '/member/dashboard'    },
    { label: 'Projects',     route: '/member/projects'     },
    { label: 'Tasks',        route: '/member/tasks'        },
    { label: 'Notifications',route: '/member/notifications'},
  ];

  constructor(private authService: AuthService, private router: Router) {
    this.role = this.authService.getRole();
    if (this.role === Role.Admin)       this.links = this.adminLinks;
    else if (this.role === Role.PM)     this.links = this.pmLinks;
    else if (this.role === Role.Member) this.links = this.memberLinks;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
