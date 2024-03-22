import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
title:string = "Header";
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
