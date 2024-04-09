import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { Subscription } from 'rxjs';
import { IProduct } from '../../Models/i-product';
import { ProductDetailsService } from '../../Services/product-details.service';
import { RatingService } from '../../Services/rating.service';
import { IComment } from '../../Models/i-comment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { HeaderComponent } from "../header/header.component";
import { StarsComponent } from "../Shared/stars/stars.component";


@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    imports: [RouterOutlet, FormsModule, CommonModule, TranslateModule, NavBarComponent, HeaderComponent, StarsComponent]
})
export class ProductDetailsComponent implements OnInit,OnDestroy {


  
  selectedRating: number;
  userName: string;
  commentStatement: string;
  product!:IProduct;
  comments: IComment[] = [];  
  commentCreated: IComment = {
    id: 0, // Initialize with a default value
    productId: 0, // Initialize with a default value
    review: '',
    quality: 0
};

  productId!:Number;
 
  lang:any="en"; 
  langChangeSubscription: Subscription;


  constructor(
    private translate: TranslateService ,
    private route: ActivatedRoute,
    private productService: ProductDetailsService,
    private ratingService: RatingService,
   
  ) {
    this.selectedRating=0;
    this.userName = 'User'; 
    this.commentStatement = 'good'; 
   

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
        console.log(data);

       this.product = data;
       
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  
    //get comments
    this.ratingService.getProductComments(id).subscribe({
      next: (data: IComment[]) => {
        console.log(data);
        this.comments = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  

  
// making a rating
  onRatingChanged(rating: number) {
    this.selectedRating = rating;
    console.log("Selected rating:", this.selectedRating); 
  }

  // making a comment
  submitComment() {
    
    console.log('Username:', this.userName);
    console.log('Comment:', this.commentStatement);

    this.commentCreated.productId=this.productId;
    this.commentCreated.review=this.commentStatement;
    this.commentCreated.quality=this.selectedRating;
    //post a comment
    this.ratingService.makeProductComment(this.commentCreated).subscribe({
      next: (data: IComment) => {
        console.log(data);
        this.comments.push(data);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
 
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
