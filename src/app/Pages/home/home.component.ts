import { Component } from '@angular/core';
import { MainsliderComponent } from '../../Components/main-slider/mainslider.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { PaymentWaysComponent } from '../../Components/payment-ways/payment-ways.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainsliderComponent,HeaderComponent,FooterComponent,NavBarComponent,PaymentWaysComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
