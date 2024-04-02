import { Component } from '@angular/core';
import { ICategory } from '../../../Model/icategory';

@Component({
  selector: 'app-filtration',
  standalone: true,
  imports: [],
  templateUrl: './filtration.component.html',
  styleUrl: './filtration.component.css'
})
export class FiltrationComponent {
  CategoryList: ICategory[] = [];
}
