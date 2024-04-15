
import { RouterModule, Routes } from '@angular/router';


import { authGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';

import { BoardUserComponent } from './Components/board-user/board-user.component';
import { BoardAdminComponent } from './Components/board-admin/board-admin.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { SearchproductComponent } from './Components/searchproduct/searchproduct.component';


const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent,canActivate:[authGuard] },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'Search', component: SearchproductComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
