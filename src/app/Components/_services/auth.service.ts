import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/api/Account/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(Email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login',{ Email, password }, httpOptions);
  }
 
  register(fName: string, lName: string, email: string,phoneNumber:number,password:string,confirmPassword:string): Observable<any> {
    return this.http.post(
         AUTH_API + 'register',{fName, lName, email, phoneNumber,password,confirmPassword },httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
