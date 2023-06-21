import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './Service/login.service';
import { HTTP_INTERCEPTORS, HttpClientModule, ɵHttpInterceptorHandler } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  providers: [LoginService,{provide:HTTP_INTERCEPTORS,useClass:InterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
