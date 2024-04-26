import { SearchproductService } from './../../Services/searchproduct.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewEncapsulation, inject, input, output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../_services/auth.service';
import { ICategory, ISubCategory } from '../../Category/Model/icategory';
import { CategoryService } from '../../Category/Services/category.service';
import { Cart, Product } from '../../Order/models/order/order.module';
import { CartService } from '../../Services/cart.service';
import { CartItemService } from './../../Order/Service/cart-item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterModule,TranslateModule, CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {
  
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
  
  ///////////////////////////////////////////////////////////////////////
  Items2:Cart[]=[];
  UserId: string|null=localStorage.getItem("userId");
  fetchCart(){
     if(this.isLoggedIn() && this.UserId!=null){
      this.CartItemService.GetUserCart(this.UserId).subscribe(Carts => {
        this.Items2 =Carts;
      });
    }else
    {
      this.Items2= JSON.parse(localStorage.getItem('CartItems')||"[]");
    }
  }
  //////////////////////////////////////////////////////////////////////
 CategoryList: ICategory[] = [];
 CartService = inject(CartService);
 addToCart(product: any) {
  this.CartService.AddtoCart(product);
}
isLoggedIn(): boolean {
  const token = localStorage.getItem('token');
  return token ? true : false;
}
Addtofavourite(product: any) {
  this.CartService.Addtofavourite(product);
}
 SubCategoryList:ISubCategory[]=[];
  @Output() categoryClicked = new EventEmitter<number>();
  @Output() SubcategoryClicked =new EventEmitter<number>();
  
  onSubCategoryClick(SubCategoryId:number):void{
     this.SubcategoryClicked.emit(SubCategoryId);
  }
  onCategoryClick(categoryId: number): void {
    this.categoryClicked.emit(categoryId);
  }
  lang:any="en";
  isSubmitted = false;
  Products:any[]= JSON.parse(localStorage.getItem('Search')||"[]");
  
  imageUrlEnglish: string = '../../../assets/download.png';
  imageUrlOtherLanguage: string = 'https://r2media.horizondm.com/wysiwyg/smartwave/porto/flags/en.png';

  get imageUrl(): string {
    if(this.lang=='en'){
      return this.imageUrlEnglish;
    }
    else
    return this.imageUrlOtherLanguage;
  }
  constructor(private CartItemService: CartItemService,
     private SearchproductService:SearchproductService, private _auth:AuthService, private _router:Router, private translate: TranslateService, private cdr: ChangeDetectorRef,private categoryServices: CategoryService, private route: ActivatedRoute) {
    translate.use(this.lang);
  }
  ngOnInit(): void {
    this.fetchCart();
    this.lang = this.translate.currentLang;
    document.documentElement.lang = this.lang;
    this.categoryServices.getallCategoryAndSubCategoryOFit().subscribe({  next :(data) => {  this.CategoryList = data;}})
    //this.categoryServices.getSubCategoryByCategory(5).subscribe({next:(data)=>this.SubCategoryList=data})
  }
  onChange() {
    if (this.lang === 'en') {
      this.translate.use('ar').subscribe(() => {
        this.lang = 'ar';
        document.documentElement.lang = this.lang;
        this.cdr.detectChanges(); // Trigger change detection
      });
    } else {
      this.translate.use('en').subscribe(() => {
        this.lang = 'en';
        document.documentElement.lang = this.lang;
        this.cdr.detectChanges(); // Trigger change detection
      });
    }
  }
  logout() {
    this._auth.logout();
    this._router.navigate(['/home']);
    this.fetchCart();
  }
  profile(){
    this._router.navigate(['/profile']);

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbarBottom = document.querySelector('.navbar-bottom') as HTMLElement;
    if (navbarBottom) {
      if (window.pageYOffset >= navbarBottom.offsetTop)
        navbarBottom.classList.add('sticky-navbar-bottom');
      else
        navbarBottom.classList.remove('sticky-navbar-bottom');
    }
    if (window.pageYOffset <= 0)
      navbarBottom.classList.remove('sticky-navbar-bottom');
  }
  
  Search(name:string): void {
  if(name=="")
      {
        localStorage.removeItem('Search');
        this.Products=[];
        //this._router.navigate(['home']);
      }else{
               // this._router.navigate(['Search']);
        this.SearchproductService.getSearchProducts(name).subscribe(products => {
        this.Products = products;
        localStorage.setItem('Search', JSON.stringify(this.Products));
         if(this.Products.length<1&&name.length>0)
           {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "We cannot find any product with this name",
            });
             localStorage.removeItem('Search');
             name ="";
             this.Search(name);
           }
      });}
      }       
}
