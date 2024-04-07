
import { CategoryService } from '../../Services/category.service';

import { IProduct } from './Model/iproduct';
import { Component, Input, ViewChild, inject, viewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../Toolbar/toolbar/toolbar.component';
import { FiltrationComponent } from '../AsideFilter/filtration/filtration.component';
import { NavBarComponent } from '../../../Components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../../Components/header/header.component';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ RouterModule, RouterOutlet, ToolbarComponent, FiltrationComponent, NavBarComponent, HeaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  CartService = inject(CartService);
  addToCart(product: any) {
    this.CartService.AddtoCart(product);
  }



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageIndex=6;
  pageSize=1;
  flag: boolean = false;
  @Input() categoryId!: number;
  products!: IProduct[];

  constructor(private categoryService: CategoryService) { }


  ngOnChanges(): void {
    if (this.categoryId) {
      this.loadProducts(this.categoryId, this.pageIndex, this.pageSize);
    }
  }

  loadProducts(categoryId: number, pageIndex: number, pageSize: number): void {
    // const pageIndex = this.paginator ? this.paginator.pageIndex : 1;
    // const pageSize = this.paginator ? this.paginator.pageSize : 10;

    this.categoryService.getProductsByCategory(categoryId, this.pageIndex, this.pageSize).subscribe(products => {
      this.products = products;
    });
  }
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex; // Set the pageIndex property of the component
    this.pageSize = event.pageSize; // Set the pageSize property of the component
    this.loadProducts(this.categoryId, this.pageIndex, this.pageSize); // Load products with the new page index and page size
  }
}

// selectedCategoryId!: number;


// GetIdOFCategory(categoryId: number): void {
//   this.selectedCategoryId = categoryId;
// }




