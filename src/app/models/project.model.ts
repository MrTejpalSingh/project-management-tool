import { ProjectStatus } from "../shared/enums/project-status.enum";

export interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  priority: TaskPriority;
  startDate: string;
  endDate: string;
  progress: number;        // 0-100
  members: number[];       // user ids
  createdBy: number;       // user id
  createdAt: string;
}