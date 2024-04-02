import { Component } from '@angular/core';
import { ProductsComponent } from '../../CategoryList/products.component';
import { NavBarComponent } from '../../../../Components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../../../Components/header/header.component';
import { ProductByCategoryComponent } from '../../ProductByCategory/product-by-category/product-by-category.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-category',
  standalone: true,
  imports: [ProductsComponent,NavBarComponent,HeaderComponent,ProductByCategoryComponent,RouterModule],
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.css'
})
export class MainCategoryComponent {
  selectedCategoryId!: number;
  selectedSubCategoryId!: number;

  GetIdOFCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }
  GetIdOFSubCategory(SubcategoryId: number): void {
    this.selectedSubCategoryId= SubcategoryId;
  }
}
