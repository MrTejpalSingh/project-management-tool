import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectStatus } from '../../shared/enums/project-status.enum';
import { TaskPriorityPMT } from '../../shared/enums/task-priority.enum';

@Injectable({
  providedIn: 'root',
})
export class ProjectServic {

 private projects: Project[] = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'Build a full featured online shopping platform with payment integration.',
    status: ProjectStatus.InProgress,
    priority: TaskPriorityPMT.High,
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    progress: 65,
    members: [4, 5, 6],
    createdBy: 2,
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    name: 'HR Portal',
    description: 'Internal HR management system for employee records and payroll.',
    status: ProjectStatus.Planned,
    priority: TaskPriorityPMT.Medium,
    startDate: '2024-04-01',
    endDate: '2024-09-30',
    progress: 10,
    members: [5, 7],
    createdBy: 2,
    createdAt: '2024-03-20'
  },
  {
    id: 3,
    name: 'Mobile App Redesign',
    description: 'Redesign the existing mobile app UI for better user experience.',
    status: ProjectStatus.Completed,
    priority: TaskPriorityPMT.Low,
    startDate: '2023-10-01',
    endDate: '2024-01-31',
    progress: 100,
    members: [4, 6, 7],
    createdBy: 3,
    createdAt: '2023-10-01'
  },
  {
    id: 4,
    name: 'Analytics Dashboard',
    description: 'Real time analytics dashboard for business intelligence reporting.',
    status: ProjectStatus.OnHold,
    priority: TaskPriorityPMT.Critical,
    startDate: '2024-02-01',
    endDate: '2024-08-31',
    progress: 30,
    members: [4, 5],
    createdBy: 3,
    createdAt: '2024-02-01'
  },
  {
    id: 5,
    name: 'Customer Support Tool',
    description: 'Ticketing and support management tool for customer service team.',
    status: ProjectStatus.InProgress,
    priority: TaskPriorityPMT.High,
    startDate: '2024-03-01',
    endDate: '2024-07-31',
    progress: 45,
    members: [5, 6, 7],
    createdBy: 2,
    createdAt: '2024-03-01'
  },
];
}
