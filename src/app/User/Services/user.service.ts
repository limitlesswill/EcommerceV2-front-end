import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, eUser } from '../Model/user/user.module';


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
  UpdateUser(id:string,User:eUser) : Observable<eUser>
  {
    return this.http.put<eUser>(`${this.UserApiUrl}/updateUser/${id}`,User,this.httpOptions);
  }
}
