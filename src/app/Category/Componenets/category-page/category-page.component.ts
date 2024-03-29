import { Component } from '@angular/core';
import { ProductsComponent } from '../CategoryList/products.component';
import { CategoryIconsComponent } from '../category-icons/category-icons.component';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [ProductsComponent, CategoryIconsComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {

}
