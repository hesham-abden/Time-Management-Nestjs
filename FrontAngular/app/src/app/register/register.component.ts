import { Component } from '@angular/core';
import { RegisterUser } from '../dto/registerUser.dto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private loginService:LoginService,private router:Router) {
    
  }
public user:RegisterUser=new RegisterUser();
form=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',Validators.required)
});
  Register(){
    this.user.email=this.form.controls.email.value;
    this.user.password=this.form.controls.password.value;
    this.user.name=this.form.controls.username.value;
    this.loginService.RegisterUser(this.user).subscribe(data=>{
      alert("Sucessful Registeration");
      this.router.navigateByUrl("");
    },(error)=>{
      alert("Unsucessful Registeration, Try again!")
    })
  }
}
