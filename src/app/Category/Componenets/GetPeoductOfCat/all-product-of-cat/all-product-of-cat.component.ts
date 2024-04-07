import { Component } from '@angular/core';
import { NavBarComponent } from '../../../../Components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../../../Components/header/header.component';
import { ProductByCategoryComponent } from '../../ProductByCategory/product-by-category/product-by-category.component';
import { FooterComponent } from '../../../../Components/footer/footer.component';

@Component({
  selector: 'app-all-product-of-cat',
  standalone: true,
  imports: [NavBarComponent,HeaderComponent,ProductByCategoryComponent,FooterComponent],
  templateUrl: './all-product-of-cat.component.html',
  styleUrl: './all-product-of-cat.component.css'
})
export class AllProductOfCAtComponent {
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
