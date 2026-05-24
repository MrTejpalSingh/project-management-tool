import { ProjectStatus } from "../shared/enums/project-status.enum";
import { TaskPriorityPMT } from "../shared/enums/task-priority.enum";

export interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  priority: TaskPriorityPMT;
  startDate: string;
  endDate: string;
  progress: number;        // 0-100
  members: number[];       // user ids
  createdBy: number;       // user id
  createdAt: string;
}