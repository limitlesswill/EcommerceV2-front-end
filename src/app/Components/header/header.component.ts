import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
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
