import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  activeCategory: string = '';

  toggleCategory(category: string) {
    this.activeCategory = this.activeCategory === category ? '' : category;
  }

}
