import { Component } from '@angular/core';
import { MainsliderComponent } from '../../Components/main-slider/mainslider.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { PaymentWaysComponent } from '../../Components/payment-ways/payment-ways.component';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar/nav-bar.component';
import { CartComponent } from '../../Components/cart/cart/cart.component';
import { MarketComponent } from '../../Components/market/market/market.component';
import { Item1Component } from '../../Components/static-items/static-items/item1/item1.component';
import { Item2Component } from '../../Components/static-items/static-items/item2/item2.component';
import { Item3Component } from '../../Components/static-items/static-items/item3/item3.component';
import { Item4Component } from '../../Components/static-items/static-items/item4/item4.component';
import { Item5Component } from '../../Components/static-items/static-items/item5/item5.component';
import { Item6Component } from '../../Components/static-items/static-items/item6/item6.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainsliderComponent,HeaderComponent,FooterComponent,NavBarComponent,PaymentWaysComponent,
    CartComponent, MarketComponent, Item1Component,Item2Component,Item3Component,Item4Component,Item5Component,
  Item6Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
