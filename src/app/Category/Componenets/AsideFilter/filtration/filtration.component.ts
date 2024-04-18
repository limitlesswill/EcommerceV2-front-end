import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory, ISubCategory } from '../../../Model/icategory';
import { CategoryService } from '../../../Services/category.service';
import { SubCategoryService } from '../../ProductByCategory/Services/sub-category.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-filtration',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './filtration.component.html',
  styleUrl: './filtration.component.css'
})
export class FiltrationComponent {
  
  @Input() categoryId!: number;
  SubCategoryList: ISubCategory[]=[];

  @Output() SubcategoryClicked =new EventEmitter<number>();
  
  onSubCategoryClick(SubCategoryId:number):void{
     this.SubcategoryClicked.emit(SubCategoryId);
  }
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
