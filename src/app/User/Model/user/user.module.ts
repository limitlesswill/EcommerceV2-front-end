import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface  User{
  id:string,
  fName: string,
  lName: string,
  email: string,
  password: string,
  comfirmPassword: string,
  phoneNumber:string
}
export interface  eUser{
  fName: string,
  lName: string,
  email: string,
  password: string,
  comfirmPassword: string,
  phoneNumber:string
}