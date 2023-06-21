import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  findAll() {
    return this.userModel.find();
  }
  findOne(email: string) {
    return this.userModel.findOne({email:email});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.userModel.findByIdAndUpdate(id, updateUserDto);
    return this.userModel.findById(id);
  }

  remove(id: number) {
    return this.userModel.findByIdAndDelete(id);
  }

  findUser(email: string): Promise<User | undefined> {
    return this.userModel.findOne((user) => user.email === email);
  }
}
