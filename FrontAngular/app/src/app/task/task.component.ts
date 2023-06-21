import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { Task } from '../dto/task.dto';
import { CreateTask } from '../dto/createTask.dto';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  public userId: string = '';
  public tasks: Task[] = [];
  public tempTasks: Task[] = [];
  public EditTask: Task = new Task();
  public AddTask: CreateTask = new CreateTask();
  public TrackedTask:Task=new Task();
  public IsEditable: boolean = false;
  public IsAdd: boolean = false;
  public IsTracked:boolean=false;
  public startTime:number=0
  public endTime:number=0;
  public Interval:any;
  
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {

    this.loginService.getUserId().subscribe((data) => {
      this.userId = data;

      this.loginService.getTasks(this.userId).subscribe((data) => {
        this.tasks = data;
        this.tempTasks = this.tasks;
      });
    });
  }
  Search(task: string) {
    this.tempTasks = this.tasks.filter((a) => a.title.includes(task));   
  }
  GetAll() {
    this.tempTasks = this.tasks;
  }
  Delete(task: Task) {
    this.loginService.DeleteTask(task._id).subscribe((data) => {
      this.ngOnInit();
    });
  }
  Edit(item: Task) {
    if (!this.IsEditable) this.IsEditable = true;
    else this.IsEditable = false;
    Object.assign(this.EditTask, item);
    this.ngOnInit();
  }
  EditChanges() {
    this.loginService.UpdateTask(this.EditTask).subscribe((data) => {
      this.EditTask = data;
      this.ngOnInit();
    });
  }
  Add() {
    if (!this.IsAdd) this.IsAdd = true;
    else this.IsAdd = false;
  }
  AddChanges() {
    this.AddTask.user = this.userId;
    this.loginService.AddTask(this.AddTask).subscribe((data) => {
      this.ngOnInit();
    });
  }
  TrackTask(item:Task){
    if (!this.IsTracked) this.IsTracked = true;
    else this.IsTracked = false;
    this.TrackedTask=item;
  }
  StartTime(){
    this.startTime=Date.now();
    this.Interval=setInterval(()=>{
      this.endTime=Math.round((Date.now()-this.startTime)/1000);
    },1000)
  }
  StopTime(){
    clearInterval(this.Interval)
    this.TrackedTask.timespent+=(this.endTime/60);
      this.loginService.UpdateTask(this.TrackedTask).subscribe(data=>{
        alert(`Time Spent : ${Math.ceil(this.endTime/60)} Minutes`)
      })
    
  }
}
