import { Component, Input, ViewChild, inject } from '@angular/core';
import { CategoryService } from '../../../Services/category.service';
import { IProduct } from '../../CategoryList/Model/iproduct';
import { SubCategoryService } from '../Services/sub-category.service';


import { CartService } from '../../../../Services/cart.service';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-by-category',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './product-by-category.component.html',
  styleUrl: './product-by-category.component.css'
})
export class ProductByCategoryComponent {
  CartService = inject(CartService);
  addToCart(product: any) {
    this.CartService.AddtoCart(product);
  }



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageIndex=6;
  pageSize=1;
  flag: boolean = false;
  @Input() SubcategoryId!: number;
  Subproducts!: IProduct[];

  constructor(private SubcategoryService: SubCategoryService) { }


  ngOnChanges(): void {
    if (this.SubcategoryId) {
      this.loadProducts(this.SubcategoryId, this.pageIndex, this.pageSize);
    }
  }

  loadProducts(categoryId: number, pageIndex: number, pageSize: number): void {
    // const pageIndex = this.paginator ? this.paginator.pageIndex : 1;
    // const pageSize = this.paginator ? this.paginator.pageSize : 10;

    this.SubcategoryService.getProductBySubCategory(categoryId, this.pageIndex, this.pageSize).subscribe(products => {
      this.Subproducts = products;
    });
  }
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex; // Set the pageIndex property of the component
    this.pageSize = event.pageSize; // Set the pageSize property of the component
    this.loadProducts(this.SubcategoryId, this.pageIndex, this.pageSize); // Load products with the new page index and page size
  }
  
}
