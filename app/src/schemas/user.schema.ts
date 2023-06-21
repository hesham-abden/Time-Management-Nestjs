import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Task } from './task.schema';
import mongoose, { ObjectId } from 'mongoose';

export type UserDocument = Document & User

@Schema()
export class User {
  @Prop({required:true})
  name: string;

  @Prop({required:true})
  email: string;
  
  @Prop({required:true})
  password: string;

  // @Prop({type:mongoose.Schema.Types.Number,ref: Task.name})
  // user: Task[];

}

export const UserSchema = SchemaFactory.createForClass(User);