export interface Activity {
  id: number;
  action: string;          // "Task created", "Status changed"
  performedBy: number;     // user id
  entityType: string;      // "Task" | "Project"
  entityId: number;
  createdAt: string;
}