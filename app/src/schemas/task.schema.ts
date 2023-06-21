import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { User } from './user.schema';

export type TaskDocument = Document & Task

@Schema()
export class Task {

  @Prop({required:true})
  title: string;

  @Prop({required:true})
  status: string;
  
  @Prop({required:true})
  timespent: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name,required:true })
  user: User;

}

export const TaskSchema = SchemaFactory.createForClass(Task);