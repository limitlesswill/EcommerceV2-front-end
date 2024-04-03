import { Component, Input, inject } from '@angular/core';
import { CategoryService } from '../../../Services/category.service';
import { IProduct } from '../../CategoryList/Model/iproduct';
import { SubCategoryService } from '../Services/sub-category.service';
<<<<<<< HEAD
import { PaginatorModule } from 'primeng/paginator';

=======
import { CartService } from '../../../../Services/cart.service';
>>>>>>> a391fad55d603e8ba619132345f0506b9c24263e

@Component({
  selector: 'app-product-by-category',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './product-by-category.component.html',
  styleUrl: './product-by-category.component.css'
})
export class ProductByCategoryComponent {
  CartService=inject(CartService);
  addToCart(product:any){
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
