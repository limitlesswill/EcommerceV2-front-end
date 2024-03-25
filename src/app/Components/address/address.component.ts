import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  ShowAdd : boolean = false;
  ShowCategory:boolean = false;
  
  toggleAdd()
  {
    this.ShowAdd = !this.ShowAdd;
  }
  
  toggleCategory()
  {
    this.ShowCategory = !this.ShowCategory;
  }
  
  
}
