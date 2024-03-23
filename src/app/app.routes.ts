import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { BoardUserComponent } from './Components/board-user/board-user.component';
import { BoardAdminComponent } from './Components/board-admin/board-admin.component';
import { HomeComponent } from './Pages/home/home.component';
import { MainsliderComponent } from './Components/main-slider/mainslider.component';

export const routes: Routes = [
    { path: 'home', component : HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },//canActivate:[authGuard]
    { path: 'user', component: BoardUserComponent },
    { path: 'admin', component: BoardAdminComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' , }


];
