import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory, ISubCategory } from '../../../Model/icategory';
import { CategoryService } from '../../../Services/category.service';
import { SubCategoryService } from '../../ProductByCategory/Services/sub-category.service';

@Component({
  selector: 'app-filtration',
  standalone: true,
  imports: [],
  templateUrl: './filtration.component.html',
  styleUrl: './filtration.component.css'
})
export class FiltrationComponent {
  
  @Input() categoryId!: number;
  SubCategoryList: ISubCategory[]=[];

  constructor(private categoryService: CategoryService) { }
  

  ngOnChanges(): void {
    if (this.categoryId) {
      this.loadProducts(this.categoryId);
    }
  }

  loadProducts(categoryId: number): void {
    this.categoryService.getSubCategoryByCategory(categoryId).subscribe(products => {
      this.SubCategoryList = products;
    });
  }
  
}
