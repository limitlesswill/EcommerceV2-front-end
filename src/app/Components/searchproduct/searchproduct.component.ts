import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from '../../Services/cart.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-searchproduct',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent],
  templateUrl: './searchproduct.component.html',
  styleUrl: './searchproduct.component.css'
})
export class SearchproductComponent {
  Products:any[]= JSON.parse(localStorage.getItem('Search')||"[]");
  CartService = inject(CartService);
  addToCart(product: any) {
    this.CartService.AddtoCart(product);
  }
}