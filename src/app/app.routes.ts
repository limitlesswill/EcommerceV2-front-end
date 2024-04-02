import { OrderListComponent } from './Order/components/order-list/order-list.component';
import { LoginComponent } from './Components/login/login.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { BoardUserComponent } from './Components/board-user/board-user.component';
import { BoardAdminComponent } from './Components/board-admin/board-admin.component';
import { HomeComponent } from './Pages/home/home.component';
import { MainsliderComponent } from './Components/main-slider/mainslider.component';
import { CartComponent } from './Components/cart/cart/cart.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ConfirmOrderComponent } from './Components/confirm-order/confirm-order.component';
import { ProductsComponent } from './Category/Componenets/CategoryList/products.component';
import { OrderLayoutComponent } from './Order/components/order-layout/order-layout.component';

export const routes: Routes = [
    { path: 'home', component : HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent}, //canActivate:[authGuard]},
    { path: 'user', component: BoardUserComponent },
    { path: 'admin', component: BoardAdminComponent },
    { path: 'cart', component: CartComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'Pay', component: ConfirmOrderComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'  },
    {
      path: 'Order',
      component: OrderLayoutComponent,
      title: 'Order',
      children: [
    {path: 'list', component: OrderListComponent, title: 'Order List'}]}
    ,{path: 'list', component: OrderListComponent, title: 'Order List'}
    
];
