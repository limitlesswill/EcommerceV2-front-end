import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registerUserData } from '../models/auth';

const AUTH_API = 'http://localhost:5000/api/Account/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth = false
  public myData: any = null
  constructor(private _http: HttpClient) {}

  loginUser(userData: any):Observable<any>{
    return this._http.post(`http://localhost:5000/api/Account/login`, userData)
  }
  register(userData: registerUserData):Observable<any>{
    return this._http.post(`http://localhost:5000/api/Account/register`, userData)
  }

  profile():Observable<any>{
    return this._http.get('http://luxor.edu.eg:8067/general/profile')
  }
  logout():Observable<any>{
    return this._http.post(`http://luxor.edu.eg:8067/general/logout`, {})
  }

  // login(Email: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'login',{ Email, password }, httpOptions);
  // }
 
  // register(fName: string, lName: string, email: string,phoneNumber:number,password:string,confirmPassword:string): Observable<any> {
  //   return this.http.post(
  //        AUTH_API + 'register',{fName, lName, email, phoneNumber,password,confirmPassword },httpOptions
  //   );
  // }

  // logout(): Observable<any> {
  //   return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  // }
}
