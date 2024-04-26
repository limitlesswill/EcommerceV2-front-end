import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface  User{
  id: number,
  fName: string,
  lName: string,
  email: string,
  password: string,
  comfirmPassword: string,
  phoneNumber:string
}