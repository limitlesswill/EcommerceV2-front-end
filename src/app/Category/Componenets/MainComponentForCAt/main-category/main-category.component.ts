import { Component } from '@angular/core';
import { ProductsComponent } from '../../CategoryList/products.component';
import { NavBarComponent } from '../../../../Components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../../../Components/header/header.component';
import { ProductByCategoryComponent } from '../../ProductByCategory/product-by-category/product-by-category.component';
import { RouterModule } from '@angular/router';
import { FiltrationComponent } from '../../AsideFilter/filtration/filtration.component';
import { ToolbarComponent } from '../../Toolbar/toolbar/toolbar.component';

@Component({
  selector: 'app-main-category',
  standalone: true,
  imports: [ProductsComponent, NavBarComponent, HeaderComponent, ProductByCategoryComponent, RouterModule, FiltrationComponent, ToolbarComponent],
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.css'
})
export class MainCategoryComponent {
  // selectedCategoryId!: number;
  // selectedSubCategoryId!: number;

  // GetIdOFCategory(categoryId: number): void {
  //   this.selectedCategoryId = categoryId;
  // }
  // GetIdOFSubCategory(SubcategoryId: number): void {
  //   this.selectedSubCategoryId= SubcategoryId;
  // }
  selectedCategoryId!: number;
  selectedSubCategoryId!: number;

  constructor() {

    const storedCategoryId = localStorage.getItem('selectedCategoryId');
    const storedSubCategoryId = localStorage.getItem('selectedSubCategoryId');

    if (storedCategoryId !== null) {
      this.selectedCategoryId = +storedCategoryId;
    }

    if (storedSubCategoryId !== null) {
      this.selectedSubCategoryId = +storedSubCategoryId;
    }
  }

  GetIdOFCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;

    localStorage.setItem('selectedCategoryId', categoryId.toString());
  }

  GetIdOFSubCategory(subcategoryId: number): void {
    this.selectedSubCategoryId = subcategoryId;
    localStorage.setItem('selectedSubCategoryId', subcategoryId.toString());
  }


}
