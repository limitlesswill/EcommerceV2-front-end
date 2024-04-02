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
    return this._http.post(`http://luxor.edu.eg:8067/general/login`, userData)
  }
  register(userData: registerUserData):Observable<any>{
    return this._http.post(`http://luxor.edu.eg:9090/api/account/register`, userData)
  }

  logout() {
    localStorage.removeItem('token');
  }
}
