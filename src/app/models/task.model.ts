import { TaskPriorityPMT } from "../shared/enums/task-priority.enum";
import { TaskStatus } from "../shared/enums/task-status.enum";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriorityPMT;
  projectId: number;
  assignedTo: number;      // user id
  createdBy: number;       // user id
  dueDate: string;
  labels: string[];
  createdAt: string;
  updatedAt: string;
}