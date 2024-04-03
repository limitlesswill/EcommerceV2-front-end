
import { CategoryService } from '../../Services/category.service';

import { IProduct } from './Model/iproduct';
import { Component, Input, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../Toolbar/toolbar/toolbar.component';
import { FiltrationComponent } from '../AsideFilter/filtration/filtration.component';
import { NavBarComponent } from '../../../Components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../../Components/header/header.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatPaginatorModule, RouterModule, RouterOutlet, ToolbarComponent, FiltrationComponent, NavBarComponent, HeaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  CartService=inject(CartService);
  addToCart(product:any){
    this.CartService.AddtoCart(product); 
  }

  flag:boolean=false;
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

  selectedCategoryId!: number;


  GetIdOFCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }


}

