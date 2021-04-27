import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
    @Get('/:id')
    getTaskById(@Param('id')id:string):Tasks{
        return this.taskService.getTaskById(id);
    }
    @Post()
    createTask(
        @Body() createTaskDto:CreateTaskDto
    ):Tasks{
        return this.taskService.createTask(createTaskDto);
    }
    @Delete("/:id")
    deleteTask(@Param('id') id:string):void{
        this.taskService.deleteTask(id);
    }
    
}
