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
import { MainCategoryComponent } from './Category/Componenets/MainComponentForCAt/main-category/main-category.component';
import { ProductByCategoryComponent } from './Category/Componenets/ProductByCategory/product-by-category/product-by-category.component';
import { AllProductOfCAtComponent } from './Category/Componenets/GetPeoductOfCat/all-product-of-cat/all-product-of-cat.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { SearchproductComponent } from './Components/searchproduct/searchproduct.component';
import { ProfileComponent } from './User/Components/profile/profile.component';
import { UpdateprofileComponent } from './User/Components/updateprofile/updateprofile.component';



export const routes: Routes = [
    { path: 'contactus', component : ContactusComponent },
    { path: 'profile', component : ProfileComponent , canActivate:[authGuard]},
    { path: 'UPprofile', component :  UpdateprofileComponent , canActivate:[authGuard]},
   
   
    { path: 'home', component : HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent}, //canActivate:[authGuard]},
    { path: 'user', component: BoardUserComponent },
    { path: 'admin', component: BoardAdminComponent },
    { path: 'cart', component: CartComponent, canActivate:[authGuard]},
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'Pay', component: ConfirmOrderComponent ,canActivate:[authGuard]},
    { path: '', redirectTo: 'home', pathMatch: 'full'  },
    { path: 'products', component: MainCategoryComponent },
    { path: 'productOfCAt', component: AllProductOfCAtComponent,title:'productOFcategory' },
    {path: 'getProductBySubCategory/:id', component: ProductByCategoryComponent, title: 'get product by category'},
  

    { path: '', redirectTo: 'home', pathMatch: 'full' , },
    { path: 'Search', component: SearchproductComponent },
    {path: 'Order',component: OrderLayoutComponent,title: 'Order'}
     ,{path: 'list', component: OrderListComponent, title: 'Order List',canActivate:[authGuard]},

     {path:'Product',component:MainCategoryComponent,title:'Products'}
  
    
];
