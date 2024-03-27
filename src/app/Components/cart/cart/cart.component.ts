import { routes } from './../../../app.routes';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { HeaderComponent } from '../../header/header.component';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { ProductListComponent } from '../../product-list/product-list.component';
import { CartService } from '../../../Services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TranslateModule, NavComponent, HeaderComponent, NavBarComponent ,ProductListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})

export class CartComponent {
 totalprice: number = 0;
  CartServic = inject(CartService);
  lang:any; 
  constructor(private translate: TranslateService,private router: Router  ) {
    this.lang = localStorage.getItem('lang')
    translate.use(this.lang);
  }
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
    this.router.navigateByUrl ('/Pay');
  }

}
