import { UserTask } from "./usertask.dto";

export class Task{
    public _id:string="";
    public title:string="";
    public timespent:number=0;
    public status:string="";
    public user:UserTask=new UserTask();

    
}