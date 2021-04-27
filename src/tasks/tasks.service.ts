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
  createTask(createTaskDto: CreateTaskDto):Tasks {
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
  getTaskById(id:string):Tasks{
    return this.tasks.find(task=>task.id===id);
  }
  deleteTask(id:string):void{
      this.tasks= this.tasks.filter(task=>task.id!=id);
  }
}
