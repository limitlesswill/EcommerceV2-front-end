
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CategoryService } from '../../Services/category.service';

import { IProduct } from './Model/iproduct';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent{

  @Input() categoryId!: number;
  products!: IProduct[];

  constructor(private categoryService: CategoryService) { }
  

  ngOnChanges(): void {
    if (this.categoryId) {
      this.loadProducts(this.categoryId);
    }
  }

  loadProducts(categoryId: number): void {
    this.categoryService.getProductByCategory(categoryId).subscribe(products => {
      this.products = products;
    });
  }
}

