import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HeaderComponent, FooterComponent, TranslateModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  lang:any; 
  langChangeSubscription: Subscription;
  constructor(private translate: TranslateService) {
    this.lang = localStorage.getItem('lang')
    translate.use(this.lang);
    this.langChangeSubscription = translate.onLangChange.subscribe(event => {
      this.lang = event.lang;
   })
  }

  activeCategory: string = '';

  toggleCategory(category: string) {
    this.activeCategory = this.activeCategory === category ? '' : category;
  }

}
