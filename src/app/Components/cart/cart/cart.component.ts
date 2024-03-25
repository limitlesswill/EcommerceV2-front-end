
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { HeaderComponent } from '../../header/header.component';
import { NavBarComponent } from '../../nav-bar/nav-bar/nav-bar.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TranslateModule, NavComponent, HeaderComponent, NavBarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  lang:any; 
  constructor(private translate: TranslateService) {
    this.lang = localStorage.getItem('lang')
    translate.use(this.lang);
  }

}
