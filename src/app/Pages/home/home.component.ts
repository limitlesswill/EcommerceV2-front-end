import { Component } from '@angular/core';
import { MainsliderComponent } from '../../Components/main-slider/mainslider.component';
import { AppliancesComponent } from "../../Components/appliances/appliances.component";
import { ThirdThingComponent } from "../../Components/thirdthing/thirdthing.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { PaymentWaysComponent } from '../../Components/payment-ways/payment-ways.component';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { CartComponent } from '../../Components/cart/cart/cart.component';
import { MarketComponent } from '../../Components/market/market/market.component';
import { Item1Component } from '../../Components/static-items/static-items/item1/item1.component';
import { Item2Component } from '../../Components/static-items/static-items/item2/item2.component';
import { Item3Component } from '../../Components/static-items/static-items/item3/item3.component';
import { Item4Component } from '../../Components/static-items/static-items/item4/item4.component';
import { Item5Component } from '../../Components/static-items/static-items/item5/item5.component';
import { Item6Component } from '../../Components/static-items/static-items/item6/item6.component';
import { ProductDetailsComponent } from "../../Components/product-details/product-details.component";
import { ProductsComponent } from "../../Category/Componenets/CategoryList/products.component";
import { ProductByCategoryComponent } from "../../Category/Componenets/ProductByCategory/product-by-category/product-by-category.component";
import { MainCategoryComponent } from '../../Category/Componenets/MainComponentForCAt/main-category/main-category.component';
import { FiltrationComponent } from '../../Category/Componenets/AsideFilter/filtration/filtration.component';




@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MainsliderComponent, HeaderComponent, FooterComponent, NavBarComponent, PaymentWaysComponent,
        CartComponent, MarketComponent, Item1Component, Item2Component, Item3Component, Item4Component, Item5Component,
        Item6Component, ProductsComponent, ProductByCategoryComponent,MainCategoryComponent,FiltrationComponent ,ProductDetailsComponent,AppliancesComponent, ThirdThingComponent]
})
export class HomeComponent {
  selectedCategoryId!: number;
  selectedSubCategoryId!: number;
 
  constructor() {
   
    const storedCategoryId = localStorage.getItem('selectedCategoryId');
    const storedSubCategoryId = localStorage.getItem('selectedSubCategoryId');

    if (storedCategoryId !== null) {
      this.selectedCategoryId = +storedCategoryId; 
    }

    if (storedSubCategoryId !== null) {
      this.selectedSubCategoryId = +storedSubCategoryId; 
    }
  }

  GetIdOFCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    localStorage.setItem('selectedCategoryId', categoryId.toString());
  }

  GetIdOFSubCategory(subcategoryId: number): void {
    this.selectedSubCategoryId = subcategoryId;
    localStorage.setItem('selectedSubCategoryId', subcategoryId.toString());
  }


  isSearchIn(): boolean {
    const Search  = localStorage.getItem('Search');
    return Search ? true : false;
  }

}
