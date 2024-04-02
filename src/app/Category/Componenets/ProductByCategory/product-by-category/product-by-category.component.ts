import { Component, Input } from '@angular/core';
import { CategoryService } from '../../../Services/category.service';
import { IProduct } from '../../CategoryList/Model/iproduct';
import { SubCategoryService } from '../Services/sub-category.service';

@Component({
  selector: 'app-product-by-category',
  standalone: true,
  imports: [],
  templateUrl: './product-by-category.component.html',
  styleUrl: './product-by-category.component.css'
})
export class ProductByCategoryComponent {
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
