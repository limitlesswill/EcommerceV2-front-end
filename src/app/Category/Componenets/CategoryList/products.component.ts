
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CategoryService } from '../../Services/category.service';

import { IProduct } from './Model/iproduct';
import { Component, Input, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardModule,ButtonModule,RouterModule,RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent{
  CartService=inject(CartService);
  addToCart(product:IProduct){
    this.CartService.AddtoCart(product); 
  }

 @Input() categoryId!: number;
  products!: IProduct[];

  constructor(private categoryService: CategoryService) { }
  

  ngOnChanges(): void {
    if (this.categoryId) {
      this.loadProducts(this.categoryId);
    }
  }

  loadProducts(categoryId: number): void {
    this.categoryService.getProductByCategory(categoryId).subscribe(products => {
      this.products = products;
    });
  }

  
}

