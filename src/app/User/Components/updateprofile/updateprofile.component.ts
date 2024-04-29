import { Component } from '@angular/core';
import { NavBarComponent } from '../../../Components/nav-bar/nav-bar.component';
import { User, eUser } from '../../Model/user/user.module';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { AuthService } from '../../../Components/_services/auth.service';
import { Order } from '../../../Order/models/order/order.module';
import Swal from 'sweetalert2';

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
    id: "",
    fName: "",
    lName: "",
    email: "",
    password: "",
    comfirmPassword: "",
    phoneNumber:""
  };
  UpUser:eUser={
    fName: "",
    lName: "",
    email: "",
    password: "",
    comfirmPassword: "",
    phoneNumber:""
  };
   
  logout() {
    this._router.navigate(['/home']); 
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
  
  
 handleFormSubmit() {
  const form = document.querySelector('form') as HTMLFormElement;
  const formData = new FormData(form);
  const firstName = formData.get('first_name') as string;
  const lastName = formData.get('last_name') as string;
  const phoneNumber = formData.get('phone_number') as string;
  
  const namePattern = /^[A-Z][a-z]*$/;
  const namePattern2 = /01[012][0-9]{8}/;
  
  // validate the inputs
  if (!firstName || !lastName || !phoneNumber) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill out all fields"
    });
    return;
  }
    if(this.isLoggedIn() && this.UserId!=null && (!firstName || !lastName || !phoneNumber) == false) {
    if (!namePattern.test(firstName)) {
      Swal.fire('The first name is not valid');
    }
    if (!namePattern.test(lastName)) {
      Swal.fire('The last name is not valid');
    }
    if (!namePattern2.test(phoneNumber)) {
      Swal.fire('The phone Number is not valid');
    }
    if(namePattern.test(firstName)&&namePattern.test(lastName)&&namePattern2.test(phoneNumber))
      {
        this.UpUser.fName=firstName;
        this.UpUser.lName=lastName;
        this.UpUser.phoneNumber=phoneNumber;
        this.UpUser.email=this.pUser.email;
        this.UpUser.password=this.pUser.email;
        this.UpUser.comfirmPassword=this.pUser.email;
        this.UserService.UpdateUser(this.UserId,this.UpUser).subscribe(user => {
        this.UpUser =user;
           });
        this._router.navigate(['/home']); 
      }
  }
}
  

  ngOnInit(): void {
    this.fetchData();
  }
}
