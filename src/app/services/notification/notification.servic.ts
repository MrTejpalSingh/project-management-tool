import { Injectable } from '@angular/core';
import { Notification } from '../../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationServic {

  private notifications: Notification[] = [
  { id: 1,  userId: 4, message: 'You have been assigned a new task: Build product listing page', read: false, createdAt: '2024-04-10' },
  { id: 2,  userId: 4, message: 'Task "Setup project repository" has been marked as Done', read: true,  createdAt: '2024-04-09' },
  { id: 3,  userId: 5, message: 'You have been assigned a new task: Write unit tests for cart module', read: false, createdAt: '2024-04-01' },
  { id: 4,  userId: 5, message: 'Task "Design database schema" status changed to Done', read: true,  createdAt: '2024-03-25' },
  { id: 5,  userId: 6, message: 'You have been assigned a new task: Payment gateway integration', read: false, createdAt: '2024-04-05' },
  { id: 6,  userId: 6, message: 'You have been added to project: Customer Support Tool', read: false, createdAt: '2024-03-01' },
  { id: 7,  userId: 7, message: 'You have been assigned a new task: Email notification on ticket update', read: false, createdAt: '2024-03-05' },
  { id: 8,  userId: 7, message: 'You have been added to project: HR Portal', read: true,  createdAt: '2024-03-20' },
  { id: 9,  userId: 2, message: 'Project "E-Commerce Platform" progress updated to 65%', read: false, createdAt: '2024-04-15' },
  { id: 10, userId: 3, message: 'Task "Define KPI metrics" is now Blocked', read: false, createdAt: '2024-03-15' },
];
}
