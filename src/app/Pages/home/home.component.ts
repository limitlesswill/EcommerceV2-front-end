import { Item3Component } from './../../Components/static-items/item3/item3.component';
import { Component } from '@angular/core';
import { MainsliderComponent } from '../../Components/main-slider/mainslider.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { PaymentWaysComponent } from '../../Components/payment-ways/payment-ways.component';
import { Item1Component } from '../../Components/static-items/item1/item1.component';
import { Item2Component } from '../../Components/static-items/item2/item2.component';
import { Item4Component } from '../../Components/static-items/item4/item4.component';
import { Item5Component } from '../../Components/static-items/item5/item5.component';
import { Item6Component } from '../../Components/static-items/item6/item6.component';
import { MarketComponent } from '../../Components/market/market.component';
import { ThirdThingComponent } from '../../Components/thirdthing/thirdthing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainsliderComponent,HeaderComponent,FooterComponent,NavBarComponent,PaymentWaysComponent,
    Item1Component,Item2Component,Item3Component,Item4Component,Item5Component,Item6Component
    ,MarketComponent,ThirdThingComponent
  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
