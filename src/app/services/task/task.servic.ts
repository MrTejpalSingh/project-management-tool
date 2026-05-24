import { Injectable } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskStatus } from '../../shared/enums/task-status.enum';
import { TaskPriorityPMT } from '../../shared/enums/task-priority.enum';

@Injectable({
  providedIn: 'root',
})
export class TaskServic {

  private tasks: Task[] = [
  // E-Commerce Platform (projectId: 1)
  {
    id: 1,
    title: 'Setup project repository',
    description: 'Initialize Git repo, configure CI/CD pipeline and branch strategy.',
    status: TaskStatus.Done,
    priority: TaskPriorityPMT.High,
    projectId: 1,
    assignedTo: 4,
    createdBy: 2,
    dueDate: '2024-01-20',
    labels: ['setup', 'devops'],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-19'
  },
  {
    id: 2,
    title: 'Design database schema',
    description: 'Design ER diagram and finalize tables for products, orders and users.',
    status: TaskStatus.Done,
    priority: TaskPriorityPMT.High,
    projectId: 1,
    assignedTo: 5,
    createdBy: 2,
    dueDate: '2024-01-25',
    labels: ['database', 'design'],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-24'
  },
  {
    id: 3,
    title: 'Build product listing page',
    description: 'Implement product listing with filters, search and pagination.',
    status: TaskStatus.InProgress,
    priority: TaskPriorityPMT.High,
    projectId: 1,
    assignedTo: 4,
    createdBy: 2,
    dueDate: '2024-05-15',
    labels: ['frontend', 'UI'],
    createdAt: '2024-02-01',
    updatedAt: '2024-04-10'
  },
  {
    id: 4,
    title: 'Payment gateway integration',
    description: 'Integrate Razorpay for handling checkout and payment flows.',
    status: TaskStatus.Todo,
    priority: TaskPriorityPMT.Critical,
    projectId: 1,
    assignedTo: 6,
    createdBy: 2,
    dueDate: '2024-06-01',
    labels: ['payments', 'integration'],
    createdAt: '2024-02-01',
    updatedAt: '2024-02-01'
  },
  {
    id: 5,
    title: 'Write unit tests for cart module',
    description: 'Cover all edge cases for add to cart, remove and quantity update.',
    status: TaskStatus.Blocked,
    priority: TaskPriorityPMT.Medium,
    projectId: 1,
    assignedTo: 5,
    createdBy: 2,
    dueDate: '2024-05-20',
    labels: ['testing'],
    createdAt: '2024-03-01',
    updatedAt: '2024-04-01'
  },

  // HR Portal (projectId: 2)
  {
    id: 6,
    title: 'Gather HR requirements',
    description: 'Meet with HR team and document all functional requirements.',
    status: TaskStatus.Done,
    priority: TaskPriorityPMT.Medium,
    projectId: 2,
    assignedTo: 5,
    createdBy: 2,
    dueDate: '2024-04-10',
    labels: ['requirements'],
    createdAt: '2024-04-01',
    updatedAt: '2024-04-09'
  },
  {
    id: 7,
    title: 'Design employee dashboard UI',
    description: 'Wireframe and design the employee self service dashboard.',
    status: TaskStatus.InProgress,
    priority: TaskPriorityPMT.Medium,
    projectId: 2,
    assignedTo: 7,
    createdBy: 2,
    dueDate: '2024-05-30',
    labels: ['UI', 'design'],
    createdAt: '2024-04-10',
    updatedAt: '2024-04-20'
  },

  // Analytics Dashboard (projectId: 4)
  {
    id: 8,
    title: 'Integrate charting library',
    description: 'Evaluate and integrate Chart.js or D3 for dashboard visualizations.',
    status: TaskStatus.InProgress,
    priority: TaskPriorityPMT.High,
    projectId: 4,
    assignedTo: 4,
    createdBy: 3,
    dueDate: '2024-05-10',
    labels: ['frontend', 'charts'],
    createdAt: '2024-02-15',
    updatedAt: '2024-04-01'
  },
  {
    id: 9,
    title: 'Define KPI metrics',
    description: 'Work with business team to finalize which KPIs to track on dashboard.',
    status: TaskStatus.Blocked,
    priority: TaskPriorityPMT.Critical,
    projectId: 4,
    assignedTo: 5,
    createdBy: 3,
    dueDate: '2024-04-30',
    labels: ['business', 'analytics'],
    createdAt: '2024-02-10',
    updatedAt: '2024-03-15'
  },

  // Customer Support Tool (projectId: 5)
  {
    id: 10,
    title: 'Build ticket creation form',
    description: 'Create a form for customers to raise support tickets with attachments.',
    status: TaskStatus.InProgress,
    priority: TaskPriorityPMT.High,
    projectId: 5,
    assignedTo: 6,
    createdBy: 2,
    dueDate: '2024-05-25',
    labels: ['frontend', 'forms'],
    createdAt: '2024-03-05',
    updatedAt: '2024-04-15'
  },
  {
    id: 11,
    title: 'Email notification on ticket update',
    description: 'Send automated email to customer when ticket status changes.',
    status: TaskStatus.Todo,
    priority: TaskPriorityPMT.Medium,
    projectId: 5,
    assignedTo: 7,
    createdBy: 2,
    dueDate: '2024-06-15',
    labels: ['notifications', 'email'],
    createdAt: '2024-03-05',
    updatedAt: '2024-03-05'
  },
  {
    id: 12,
    title: 'Testing ticket assignment flow',
    description: 'End to end testing of ticket creation, assignment and resolution.',
    status: TaskStatus.Testing,
    priority: TaskPriorityPMT.High,
    projectId: 5,
    assignedTo: 5,
    createdBy: 2,
    dueDate: '2024-06-01',
    labels: ['testing', 'QA'],
    createdAt: '2024-03-10',
    updatedAt: '2024-04-20'
  },
];
}
