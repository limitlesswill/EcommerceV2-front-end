
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentWaysComponent } from './Components/payment-ways/payment-ways.component';
import { httpInterceptorProviders } from './Components/_helpers/http.interceptor';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule,
    HttpClientModule,
    NavBarComponent,
    ButtonModule
  
   
   
  ],
  providers: [httpInterceptorProviders],
  //bootstrap: [AppComponent]
})
export class AppModule { }
