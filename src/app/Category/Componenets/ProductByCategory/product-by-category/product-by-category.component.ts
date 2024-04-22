import { Component, Input, ViewChild, inject } from '@angular/core';
import { CategoryService } from '../../../Services/category.service';
import { IProduct } from '../../CategoryList/Model/iproduct';
import { SubCategoryService } from '../Services/sub-category.service';


import { CartService } from '../../../../Services/cart.service';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-by-category',
  standalone: true,
  imports: [MatPaginatorModule,RouterModule],
  templateUrl: './product-by-category.component.html',
  styleUrl: './product-by-category.component.css'
})
export class ProductByCategoryComponent {
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
  @Input() SubcategoryId!: number;
  Subproducts!: IProduct[];

  constructor(private SubcategoryService: SubCategoryService) { }


  ngOnChanges(): void {
    if (this.SubcategoryId) {
      this.loadProducts(this.SubcategoryId, this.pageIndex, this.pageSize);
    }
  }

  loadProducts(SubcategoryId: number, pageIndex: number, pageSize: number): void {
    const num = pageSize; 
    const pageNum = pageIndex + 1; 
    this.SubcategoryService.getProductBySubCategory(SubcategoryId, num, pageNum).subscribe(products => {
      this.Subproducts = products;
    });
  }
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    this.loadProducts(this.SubcategoryId, this.pageIndex, pageSize);
  }
  
}
