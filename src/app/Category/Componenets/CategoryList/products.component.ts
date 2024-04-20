
import { CategoryService } from '../../Services/category.service';
import { IProduct } from './Model/iproduct';

import { RouterModule, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../Toolbar/toolbar/toolbar.component';
import { FiltrationComponent } from '../AsideFilter/filtration/filtration.component';
import { NavBarComponent } from '../../../Components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../../Components/header/header.component';
import { MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { CartService } from '../../../Services/cart.service';
import { Component, Input, ViewChild, inject } from '@angular/core';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ RouterModule, RouterOutlet, ToolbarComponent, FiltrationComponent, NavBarComponent, HeaderComponent,
    MatPaginatorModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  CartService = inject(CartService);
  addToCart(product: any) {
    this.CartService.AddtoCart(product);
  }
  Addtofavourite(product: any) {
    this.CartService.Addtofavourite(product);
  }


 @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageIndex: number = 0;
  pageSize=10;
  @Input() categoryId!: number;
  products!: IProduct[];

  constructor(private categoryService: CategoryService) { }


  ngOnChanges(): void {
    if (this.categoryId) {
      this.loadProducts(this.categoryId, this.pageIndex, this.pageSize);
    }
  }

  loadProducts(categoryId: number, pageIndex: number, pageSize: number): void {
    const num = pageSize; 
    const pageNum = pageIndex + 1; 
    this.categoryService.getProductsByCategory(categoryId, num, pageNum).subscribe(products => {
      this.products = products;
    });
  }
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    this.loadProducts(this.categoryId, this.pageIndex, pageSize);
  }
}





