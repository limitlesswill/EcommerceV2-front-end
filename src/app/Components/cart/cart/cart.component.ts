import { routes } from './../../../app.routes';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { HeaderComponent } from '../../header/header.component';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { ProductListComponent } from '../../product-list/product-list.component';
import { CartService } from '../../../Services/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TranslateModule, NavComponent, HeaderComponent, NavBarComponent ,ProductListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})

export class CartComponent {

  lang:any="en"; 
  langChangeSubscription: Subscription;
  constructor(private translate: TranslateService , private Router:Router) {
    this.lang = localStorage.getItem('lang');
    translate.use(this.lang);

    // Subscribe to langChange event
    this.langChangeSubscription = translate.onLangChange.subscribe(event => {
      this.lang = event.lang;
      // Update any component-specific properties or UI elements here
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from langChange event to avoid memory leaks
    this.langChangeSubscription.unsubscribe();
  }




  totalprice: number = 0;
  CartServic = inject(CartService);
  getTotal(){
    return this.CartServic.getTotal();}
   
  
    getItemPrice(product:any){
      return this.CartServic.getItemPrice(product.Id);}
     
  delete(product:any){
    this.CartServic.delete(product); 
  }
  IncreamentQuantity(product:any){
    this.CartServic.IncreamentQuantity(product.Id); 
  }
  
  DecreamentQuantity(product:any){
    this.CartServic.DecreamentQuantity(product.Id);
  }

  checkout(){
    this.Router.navigate(['Pay']);
  }

}
