import { Component } from '@angular/core';
import { NavBarComponent } from '../../../Components/nav-bar/nav-bar.component';
import { User } from '../../Model/user/user.module';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { AuthService } from '../../../Components/_services/auth.service';
import { Order } from '../../../Order/models/order/order.module';

@Component({
  selector: 'app-updateprofile',
  standalone: true,
  imports: [ NavBarComponent],
 
  templateUrl: './updateprofile.component.html',
  styleUrl: './updateprofile.component.css'
})
export class UpdateprofileComponent {
 UserId: string|null= localStorage.getItem('userId');
  pUser:User={
    id: 0,
    fName: "",
    lName: "",
    email: "",
    password: "",
    comfirmPassword: "",
    phoneNumber:""
  };
   
  logout() {
    this._router.navigate(['/profile']); 
  }
  
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }
  constructor(private _auth:AuthService, private _router:Router, private UserService: UserService,private router: Router ){}


  fetchData(){
    if(this.isLoggedIn() && this.UserId!=null){
      this.UserService.GetUserById(this.UserId).subscribe(user => {
        this.pUser =user;
      });
    }
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
