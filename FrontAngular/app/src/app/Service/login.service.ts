import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../dto/user.dto';
import { Token } from '../dto/token.dto';
import { BehaviorSubject } from 'rxjs';
import { RegisterUser } from '../dto/registerUser.dto';
import { Task } from '../dto/task.dto';
import { CreateTask } from '../dto/createTask.dto';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public UserId:BehaviorSubject<string>=new BehaviorSubject<string>("");
  public IsLogged=false;
    constructor(private httpClient: HttpClient) { }
    userLogin(user:User){
      return this.httpClient.post<Token>("http://localhost:3000/auth/login",user)
    }
    getTasks(userId:string)
    {
      return this.httpClient.get<any>(`http://localhost:3000/tasks/${userId}`)
    }

    getUserId()
    {
      return this.UserId;
    }
    setUserId(userId:string)
    {
      this.UserId.next(userId);
    }
    RegisterUser(user:RegisterUser)
    {
      return this.httpClient.post<RegisterUser>(`http://localhost:3000/users`,user);
    }
    DeleteTask(taskId:string)
    {
      return this.httpClient.delete<any>(`http://localhost:3000/tasks/${taskId}`)
    }
    UpdateTask(task:Task)
    {
      return this.httpClient.patch<any>(`http://localhost:3000/tasks`,task);
    }
    AddTask(task:CreateTask)
    {
      return this.httpClient.post<Task>(`http://localhost:3000/tasks`,task);
    }

  
}
