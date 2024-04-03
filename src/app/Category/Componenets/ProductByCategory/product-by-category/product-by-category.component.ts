import { Component, Input, inject } from '@angular/core';
import { CategoryService } from '../../../Services/category.service';
import { IProduct } from '../../CategoryList/Model/iproduct';
import { SubCategoryService } from '../Services/sub-category.service';
import { PaginatorModule } from 'primeng/paginator';

import { CartService } from '../../../../Services/cart.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-product-by-category',
  standalone: true,
  imports: [PaginatorModule,MatPaginatorModule],
  templateUrl: './product-by-category.component.html',
  styleUrl: './product-by-category.component.css'
})
export class ProductByCategoryComponent {
  CartService=inject(CartService);
  addToCart(product:IProduct){
    this.CartService.AddtoCart(product); 
  }

  @Input() SubcategoryId!: number;
  Subproducts: IProduct[]=[];

  constructor(private SubcategoryService: SubCategoryService) { }
  
  ngOnChanges(): void {
    if (this.SubcategoryId) {
      this.loadProducts(this.SubcategoryId);
    }
  }

  loadProducts(categoryId: number): void {
    this.SubcategoryService.getProductBySubCategory(categoryId).subscribe(products => {
      this.Subproducts = products;
    });
  }
  
}
