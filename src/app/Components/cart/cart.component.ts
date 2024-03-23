
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavComponent } from '../nav/nav.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TranslateModule, NavComponent],
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
