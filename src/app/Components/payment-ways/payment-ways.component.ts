import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-payment-ways',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './payment-ways.component.html',
  styleUrl: './payment-ways.component.css'
})
export class PaymentWaysComponent {
  Products:any[]= JSON.parse(localStorage.getItem('favouriteProduct')||"[]");
  CartService = inject(CartService);
  addToCart(product: any) {
    this.CartService.AddtoCart(product);
  }
  
Addtofavourite(product: any) {
  this.CartService.Addtofavourite(product);
}
}
