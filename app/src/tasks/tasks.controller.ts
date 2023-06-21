import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'auth/auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }
  // @UseGuards(AuthGuard)
  // @Get()
  // findAll() {
  //   return this.tasksService.findAll();
  // }
  @UseGuards(AuthGuard)
  @Get('title:title')
  find(@Param('title') title: string) {
    return this.tasksService.findOne(title);
  }
  @UseGuards(AuthGuard)
  @Get(':userId')
  findOne(@Param('userId') userId:string){
    return this.tasksService.findTasks(userId)
  }
  @UseGuards(AuthGuard)
  @Patch('')
  update(@Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(updateTaskDto);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
