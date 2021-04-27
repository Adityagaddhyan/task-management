import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task';
import { Tasks } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService){}
    @Get()
    getAllTasks():Tasks[]{
        return this.taskService.getAllTasks();
    }
    @Post()
    createTask(
        @Body() createTaskDto:CreateTaskDto
    ):Tasks{
        return this.taskService.createTask(createTaskDto);
    }
}
