import { Order} from './../../../Order/models/order/order.module';
import { routes } from './../../../app.routes';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { HeaderComponent } from '../../header/header.component';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { CartService } from '../../../Services/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { OrderDetailsService } from '../../../Order/Service/order-details.service';
import { OrderService , } from '../../../Order/Service/order.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TranslateModule, NavComponent, HeaderComponent, NavBarComponent ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})

export class CartComponent {
  private Items:any[]= JSON.parse(localStorage.getItem('CartItems')||"[]");
  private Order:Order={
    id: 0,
    finalPrice: 0,
    date: new Date('2024-01-01'),
    state: 1,
    userID: "string"
  } ;
 

  lang:any="en"; 
  langChangeSubscription: Subscription;
  constructor(private translate: TranslateService , private Router:Router ,
    private OrderService: OrderService,private OrderDetailsService:OrderDetailsService,) {
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
    return this.CartServic.getTotal();}
   
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

  checkout(){
   
  
  
  
  
  
  
 //Order creation
 this.Order.date= new Date(Date.now());
 this.Order.userID="2ac5b300-67e7-4750-8205-7de2bf74c6b1";
 this.OrderService.CreateOrder(this.Order).subscribe();
 console.log(this.Items);
 this.Items.forEach(element => {this.CartServic.delete(element);});   
 //this.Router.navigate(['Pay']);
  }

}
