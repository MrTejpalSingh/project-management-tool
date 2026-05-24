import { Notifications } from './admin/notifications/notifications';
import { ActivityLog } from './admin/activity-log/activity-log';
import { Settings } from './admin/settings/settings';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { Login } from './auth/login/login';
import { ProjectList } from './shared/components/entitiy-level/projects/project-list/project-list';
import { ProjectCreate } from './shared/components/entitiy-level/projects/project-create/project-create';
import { ProjectDetail } from './shared/components/entitiy-level/projects/project-detail/project-detail';
import { ProjectEdit } from './shared/components/entitiy-level/projects/project-edit/project-edit';
import { TaskList } from './shared/components/entitiy-level/tasks/task-list/task-list';
import { TaskCreate } from './shared/components/entitiy-level/tasks/task-create/task-create';
import { TaskDetail } from './shared/components/entitiy-level/tasks/task-detail/task-detail';
import { TaskEdit } from './shared/components/entitiy-level/tasks/task-edit/task-edit';
import { UserList } from './shared/components/entitiy-level/users/user-list/user-list';
import { UserCreate } from './shared/components/entitiy-level/users/user-create/user-create';
import { UserDetail } from './shared/components/entitiy-level/users/user-detail/user-detail';
import { UserEdit } from './shared/components/entitiy-level/users/user-edit/user-edit';
import { PmDashboard } from './pm/pm-dashboard/pm-dashboard';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'admin',
        children:[
            {
                path: '/dashboard',
                component: AdminDashboard
            },
            {
                path: '/projects',
                component: ProjectList,
                children: [
                    {
                        path: '/create',
                        component: ProjectCreate,
                    },
                    {
                        path: '/id',
                        component: ProjectDetail,
                    },
                    {
                        path: '/id/edit',
                        component: ProjectEdit,
                    }
                ]
            },
            {
                path: '/tasks',
                component: TaskList,
                children: [
                    {
                        path: '/create',
                        component: TaskCreate,
                    },
                    {
                        path: '/id',
                        component: TaskDetail,
                    },
                    {
                        path: '/id/edit',
                        component: TaskEdit,
                    }
                ]
            },
            {
                path: '/users',
                component: UserList,
                children: [
                    {
                        path: '/create',
                        component: UserCreate,
                    },
                    {
                        path: '/id',
                        component: UserDetail,
                    },
                    {
                        path: '/id/edit',
                        component: UserEdit,
                    }
                ]
            },
            {
                path: '/notifications',
                component: Notifications
            },
            {
                path: '/activity-log',
                component: ActivityLog
            },
            {
                path: '/settings',
                component: Settings
            }
        ]
    },
    {
        path: 'pm',
        children:[
            {
                path: '/dashboard',
                component: PmDashboard
            },
            {
                path: '/projects',
                component: ProjectList,
                children: [
                    {
                        path: '/create',
                        component: ProjectCreate,
                    },
                    {
                        path: '/id',
                        component: ProjectDetail,
                    },
                    {
                        path: '/id/edit',
                        component: ProjectEdit,
                    }
                ]
            },
            {
                path: '/tasks',
                component: TaskList,
                children: [
                    {
                        path: '/create',
                        component: TaskCreate,
                    },
                    {
                        path: '/id',
                        component: TaskDetail,
                    },
                    {
                        path: '/id/edit',
                        component: TaskEdit,
                    }
                ]
            },
            {
                path: '/users',
                component: UserList,
                children: [
                    {
                        path: '/create',
                        component: UserCreate,
                    },
                    {
                        path: '/id',
                        component: UserDetail,
                    },
                    {
                        path: '/id/edit',
                        component: UserEdit,
                    }
                ]
            },
            {
                path: '/notifications',
                component: Notifications
            },
            {
                path: '/activity-log',
                component: ActivityLog
            },
            {
                path: '/settings',
                component: Settings
            }
        ]
    }
];
