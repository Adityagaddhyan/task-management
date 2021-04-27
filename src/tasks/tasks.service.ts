import { Injectable } from '@nestjs/common';
import { Tasks, TaskStatus } from './tasks.model';
import { vi as uuid } from 'uuid';
@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];
  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task: Tasks = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
