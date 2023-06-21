import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [{path:"register",component:RegisterComponent},
{path:"",component:LoginComponent},
{path:"tasks",component:TaskComponent,canActivate:[LoginGuard]},
{path:"**",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
