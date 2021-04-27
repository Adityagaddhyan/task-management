import { Injectable } from '@nestjs/common';
import { Tasks, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task';
@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];
  getAllTasks() {
    return this.tasks;
  }
  createTask(createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;
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
