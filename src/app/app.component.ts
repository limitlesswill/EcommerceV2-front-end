
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { AppliancesComponent } from './Components/appliances/appliances.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PaymentWaysComponent } from './Components/payment-ways/payment-ways.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainsliderComponent } from './Components/main-slider/mainslider.component';
import { MarketComponent } from './Components/market/market.component';
import { ThirdThingComponent } from './Components/thirdthing/thirdthing.component';
import { Item1Component } from './Components/static-items/item1/item1.component';
import { Item2Component } from './Components/static-items/item2/item2.component';
import { Item6Component } from './Components/static-items/item6/item6.component';
import { Item5Component } from './Components/static-items/item5/item5.component';
import { Item4Component } from './Components/static-items/item4/item4.component';
import { Item3Component } from './Components/static-items/item3/item3.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { Component } from '@angular/core';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { Subscription } from 'rxjs';
import { StorageService } from './Components/_services/storage.service';
import { AuthService } from './Components/_services/auth.service';
<<<<<<< HEAD
import { ProductsComponent } from './Components/AllProduct/products/products.component';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
=======
import { HomeComponent } from './Pages/home/home.component';
>>>>>>> 0535eba69d9aa1b881354d51a04e00a9ed3d1b80


@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,CartComponent,AppliancesComponent,HeaderComponent,NavBarComponent,RegisterComponent,ProductsComponent,
    PaymentWaysComponent,FooterComponent,MainsliderComponent,MarketComponent,ThirdThingComponent,
    Item1Component,Item2Component,Item3Component,Item4Component,Item5Component,Item6Component,ProductDetailsComponent,LoginComponent,AppComponent],
=======
  imports: [RouterOutlet, CartComponent,AppliancesComponent,HeaderComponent,NavBarComponent,RegisterComponent,HomeComponent
    ,PaymentWaysComponent,FooterComponent,MainsliderComponent,MarketComponent,ThirdThingComponent,
    Item1Component,Item2Component,Item3Component,Item4Component,Item5Component,Item6Component ,ProductDetailsComponent,LoginComponent,AppComponent],
>>>>>>> 0535eba69d9aa1b881354d51a04e00a9ed3d1b80
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userInterfaceV2';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
   
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

  
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
