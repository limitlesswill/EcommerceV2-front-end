import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Model/user/user.module';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserApiUrl:string = environment.UserApiUrl;
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  GetUserById(id :string) : Observable< User>
  {
    return this.http.get< User>(`${this.UserApiUrl}/getUser/${id}`);
  }
  UpdateUser(id:string,User:User) : Observable<User>
  {
    return this.http.put<User>(`${this.UserApiUrl}/updateUser/${id}`,User,this.httpOptions);
  }
}
