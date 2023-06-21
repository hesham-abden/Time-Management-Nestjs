import { Component } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { User } from '../dto/user.dto';
import { Token } from '../dto/token.dto';
import { ActivatedRoute, Route, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DecodedToken } from '../dto/decoded.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User=new User();
  token:Token=new Token();
  constructor(private loginService:LoginService,private route:ActivatedRoute,private router:Router) {
  }
  Login(){
    this.loginService.userLogin(this.user).subscribe(data=>{
      if(data.access_token!=undefined){
        this.loginService.IsLogged=true;
        localStorage.setItem("token",data.access_token)
        const decodedToken:DecodedToken=jwtDecode(data.access_token)
        this.loginService.setUserId(decodedToken.sub);
        this.router.navigate(["tasks"],{relativeTo:this.route})
      }

    },(data)=>{
      alert("Wrong password")
    }
    
    
    );
    
  }
}
