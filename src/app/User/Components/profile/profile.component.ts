import { Component } from '@angular/core';
import { NavBarComponent } from '../../../Components/nav-bar/nav-bar.component';
import { User } from '../../Model/user/user.module';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core/dist/lib/translate.service';
import { UserService } from '../../Services/user.service';
import { AuthService } from '../../../Components/_services/auth.service';
import { Order } from '../../../Order/models/order/order.module';

import { OrderService } from '../../../Order/Service/order.service';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ NavBarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
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
  Orders: Order[] = [];
  editOrders() {
    this._router.navigate(['/list']);
  } 

  editUsers() {
    this._router.navigate(['/UPprofile']);
  } 
  logout() {
    this._auth.logout();
    this._router.navigate(['/home']);
    
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }
  constructor(private _auth:AuthService,private OrderService: OrderService, private _router:Router, private UserService: UserService,private router: Router ){}


  fetchData(){
    if(this.isLoggedIn() && this.UserId!=null){
      this.UserService.GetUserById(this.UserId).subscribe(user => {
        this.pUser =user;
      });
    }
  }
  fetchOrders(): void {
    if(this.UserId!=null)
    this.OrderService.GetUserOrders(this.UserId).subscribe(Orders => {
      this.Orders = Orders;
    });
  }

  ngOnInit(): void {
    this.fetchData();
    this.fetchOrders();
  }
}
