import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from 'auth/auth.module';

@Module({
  imports: [TasksModule,AuthModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/protask')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
