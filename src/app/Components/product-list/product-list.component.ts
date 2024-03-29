import { CartComponent } from '../cart/cart/cart.component';
import { CartService } from './../../Services/cart.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  CartService=inject(CartService);
  Products:any []=[
    {Id:1, name:"product1",price:200,quantity:20},
    {Id:2, name:"product2",price:200,quantity:10},
    {Id:3, name:"product3",price:300,quantity:30},
    {Id:4, name:"product4",price:400,quantity:27},
    {Id:5, name:"product5",price:600,quantity:15}
  ]
  addToCart(product:any){
    this.CartService.AddtoCart(product); 
  }

}
