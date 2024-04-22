import { CartItemService } from './../../../Order/Service/cart-item.service';
import { Cart, Order} from './../../../Order/models/order/order.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { HeaderComponent } from '../../header/header.component';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { CartService } from '../../../Services/cart.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService , } from '../../../Order/Service/order.service';
import { environment } from '../../../../environment/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TranslateModule, NavComponent, HeaderComponent, NavBarComponent ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})

export class CartComponent {
  lang:any="en"; 
  langChangeSubscription: Subscription;
  private Items:any[]= JSON.parse(localStorage.getItem('CartItems')||"[]");
  Items2:Cart[]=[];
  UserId: string|null=localStorage.getItem("userId");


  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }
  ngOnInit(): void {
    this.fetchCart();
  }
  fetchCart(){
     if(this.isLoggedIn() && this.UserId!=null){
      this.CartItemService.GetUserCart(this.UserId).subscribe(Carts => {
        this.Items2 =Carts;
      });
    }else
    {
      this.Items= JSON.parse(localStorage.getItem('CartItems')||"[]");
    }
  }
  deleteItem(id:number)
  {
    this.CartItemService.DeleteCart(id).subscribe((d) => {
    this.fetchCart(); // Refresh the list
     }); 
  }
  IncreamentItemQuantity(Cart:Cart): void {
    Cart.quantity++;
    this.CartItemService.UpdateCart(Cart.id,Cart).subscribe((d) => {
    this.fetchCart(); // Refresh the list
     }); 
  }
  DecreamentItemQuantity(Cart:Cart): void {
    Cart.quantity--;
    if(Cart.quantity==0)
      {this.deleteItem(Cart.id);}
    this.CartItemService.UpdateCart(Cart.id,Cart).subscribe((d) => {
    this.fetchCart(); // Refresh the list
     }); 
  }
  private Order:Order={
    id: 0,
    finalPrice: 0,
    date: new Date('2024-01-01'),
    state: 1,
    userID:"",
    address:" "
  };
  checkout(){
    if(!this.isLoggedIn() || this.UserId==null ){
      Swal.fire("Please login");
      this.router.navigate(['login']);
    }
   else{
    if(this.Items2.length<=0)
      {Swal.fire("There is no items in Cart");}}
   
   this.Order.date= new Date(Date.now());
   this.Order.address=" ";
   if(this.isLoggedIn() && this.UserId!=null && this.Items2.length>0){
   this.Order.userID=this.UserId;
   this.Items2 =[];
   Swal.fire({
        title: "Good job!",
        text: "Your Order have been created",
        icon: "success"
      });
   this.OrderService.CreateOrder(this.Order).subscribe(); 
    }
    }
    checkout2(){
      if(this.isLoggedIn() && this.UserId!=null){
      this.router.navigate(['list']);
     }
     else{
      Swal.fire("Please login");
      this.router.navigate(['login']);
     }
       }
  constructor(private router: Router,private translate: TranslateService , private Router:Router ,
    private OrderService: OrderService,private CartItemService: CartItemService) {
    this.lang = localStorage.getItem('lang');
    translate.use(this.lang);

    // Subscribe to langChange event
    this.langChangeSubscription = translate.onLangChange.subscribe(event => {
      this.lang = event.lang;
      // Update any component-specific properties or UI elements here
    });
  }

  
  ngOnDestroy(): void {
    // Unsubscribe from langChange event to avoid memory leaks
    this.langChangeSubscription.unsubscribe();
  }
  totalprice: number = 0;
  CartServic = inject(CartService);
  getTotal(){
    if(this.isLoggedIn())
      {
        const sum = this.Items2.reduce((accumulator, currentValue) => accumulator + currentValue.totalPrice, 0);
        return sum;
      }
      else
      {
        return this.CartServic.getTotal();
      }
  
  }
  getItemPrice(product:any){
      return this.CartServic.getItemPrice(product.id);}
     
  delete(product:any){
    this.CartServic.delete(product); 
  }
  IncreamentQuantity(product:any){
    this.CartServic.IncreamentQuantity(product.id); 
  }
  
  DecreamentQuantity(product:any){
    this.CartServic.DecreamentQuantity(product.id);
  }

}
