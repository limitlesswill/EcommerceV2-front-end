import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'Login',
    component: LogInComponent
  },
  {
    path: 'register',
    component: RegisterComponent
    // canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
