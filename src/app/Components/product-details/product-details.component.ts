import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../../Models/i-product';
import { ProductDetailsService } from '../../Services/product-details.service';
import { RatingService } from '../../Services/rating.service';
import { IComment } from '../../Models/i-comment';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { HeaderComponent } from "../header/header.component";
import { StarsComponent } from "../Shared/stars/stars.component";
import { CartService } from '../../Services/cart.service';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    imports: [RouterOutlet, FormsModule, CommonModule, TranslateModule, NavBarComponent, HeaderComponent, StarsComponent,ReactiveFormsModule]
})
export class ProductDetailsComponent implements OnInit {
  selectedRating!: number;
  userName!: string;
  commentStatement!: string;
  product!:IProduct;
  comments: IComment[] = [];  
  commentForm!: FormGroup;
  productId!:Number;
  lang:any="en"; 
  langChangeSubscription: Subscription;
  ShowComments: boolean=false; 
  ShowAddComments: boolean=false;
  UserId: string|null=localStorage.getItem("userId");
  constructor(
    private router: Router,
    private translate: TranslateService ,
    private route: ActivatedRoute,
    private productService: ProductDetailsService,
    private ratingService: RatingService,
    private formBuilder: FormBuilder,
    private CartService: CartService ) {
    this.commentForm = this.formBuilder.group({
      commentStatement: ['', Validators.required],
      selectedRating: [0, Validators.required]
    });
    this.lang = localStorage.getItem('lang');
    translate.use(this.lang);
   // Subscribe to langChange event
    this.langChangeSubscription = translate.onLangChange.subscribe(event => {
      this.lang = event.lang;
      // Update any component-specific properties or UI elements here
    });
  }
  sub! : Subscription;
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productId=id;
    
   //get product details
   this.productService.getProductDetails(id).subscribe({
      next: (data: IProduct) => {
       this.product = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  
  }

  ShowComment(){
    if(this.ShowComments==false)
      {
   this.ShowComments=true;
   this.ShowAddComments=false;
   const id = Number(this.route.snapshot.paramMap.get('id'));
   this.ratingService.getProductComments(id).subscribe({
    next: (data: IComment[]) => {
     // console.log(data);
      this.comments = data;
    },
    error: (err: any) => {
      console.log(err);
    },
  }); }
  else {
    this.ShowComments=false;
  }
  }
  AddComment(){
    if(!this.isLoggedIn() || this.UserId==null ){
      Swal.fire("Please login");
      this.router.navigate(['login']);
    }else{
     this.ShowAddComments=true;
    this.ShowComments=false;
   }
  }

  
// making a rating
  onRatingChanged(rating: number) {
    this.selectedRating = rating;
    // console.log("Selected rating:", this.selectedRating); 
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  // making a comment
  submitComment() {
    if (this.commentForm.valid) {
      const commentStatement = this.commentForm.get('commentStatement')?.value;
      const commentCreated: IComment = {
        id: 0,
        productId: this.productId,
        review: commentStatement,
        quality: this.selectedRating,
        UserId: "",
        userName:"",
        date:new Date('2024-01-01')
      };
      commentCreated.date= new Date(Date.now());
      if(this.UserId!=null){
      commentCreated.UserId= this.UserId;}
      this.ratingService.makeProductComment(commentCreated).subscribe({
        next: (data: IComment) => {
          // console.log(data);
          this.comments.push(data);
          // Reset form after submission
          this.commentForm.reset();
          this.selectedRating = 0;
        },
        error: (err: any) => {
          console.log(err);
        }
      });
      
      // this.ratingService.getProductComments(this.productId).subscribe({
      //   next: (data: IComment[]) => {
      //     this.comments = data;
      //   },
      //   error: (err: any) => {
      //     console.log(err);
      //   },
      // });
      
     

    }
    
    this.ShowAddComments=false;
    
  }



 

  addToCart(product: any) {
   this.CartService.AddtoCart(product);
 }
 
 

}




