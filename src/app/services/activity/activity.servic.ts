import { Injectable } from '@angular/core';
import { Activity } from '../../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivityServic {
    
  private activities: Activity[] = [
    { id: 1,  action: 'Created project',           entityType: 'Project', entityId: 1, performedBy: 2, createdAt: '2024-01-15' },
    { id: 2,  action: 'Created task',              entityType: 'Task',    entityId: 1, performedBy: 2, createdAt: '2024-01-15' },
    { id: 3,  action: 'Created task',              entityType: 'Task',    entityId: 2, performedBy: 2, createdAt: '2024-01-15' },
    { id: 4,  action: 'Changed status to Done',    entityType: 'Task',    entityId: 1, performedBy: 4, createdAt: '2024-01-19' },
    { id: 5,  action: 'Changed status to Done',    entityType: 'Task',    entityId: 2, performedBy: 5, createdAt: '2024-01-24' },
    { id: 6,  action: 'Created project',           entityType: 'Project', entityId: 2, performedBy: 2, createdAt: '2024-03-20' },
    { id: 7,  action: 'Created project',           entityType: 'Project', entityId: 4, performedBy: 3, createdAt: '2024-02-01' },
    { id: 8,  action: 'Changed status to Blocked', entityType: 'Task',    entityId: 5, performedBy: 5, createdAt: '2024-04-01' },
    { id: 9,  action: 'Changed status to Blocked', entityType: 'Task',    entityId: 9, performedBy: 5, createdAt: '2024-03-15' },
    { id: 10, action: 'Updated project progress',  entityType: 'Project', entityId: 1, performedBy: 2, createdAt: '2024-04-15' },
    { id: 11, action: 'Created task',              entityType: 'Task',    entityId: 10, performedBy: 2, createdAt: '2024-03-05' },
    { id: 12, action: 'Created project',           entityType: 'Project', entityId: 5,  performedBy: 2, createdAt: '2024-03-01' },
];
}
