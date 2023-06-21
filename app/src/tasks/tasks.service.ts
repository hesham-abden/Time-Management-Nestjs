import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/schemas/task.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel:Model<Task>){}

  create(createTaskDto: CreateTaskDto) {
    const createTask=new this.taskModel(createTaskDto);
    return createTask.save();
  }

  findAll() {
    return this.taskModel.find().populate("user",{name:1});
  }
  findTasks(userId:string){
    return this.taskModel.find({user:userId}).populate("user",{name:1});
  }

  findOne(title: string) {
    return this.taskModel.findOne({title});
  }

  async update(updateTaskDto: UpdateTaskDto) {
    const updated= await this.taskModel.findByIdAndUpdate(updateTaskDto._id,updateTaskDto,{new:true})
    return updated;
  }

  remove(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
