import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../_services/auth.service';
import { ICategory, ISubCategory } from '../../Category/Model/icategory';
import { CategoryService } from '../../Category/Services/category.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterModule,TranslateModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {
  CategoryList: ICategory[] = [];
  SubCategoryList:ISubCategory[]=[];
  categoryId: number =0;
  @Output() categoryClicked = new EventEmitter<number>();

  onCategoryClick(categoryId: number): void {
    this.categoryClicked.emit(categoryId);
  }


  lang:any="en";
  isSubmitted = false;

  
  imageUrlEnglish: string = '../../../assets/download.png';
  imageUrlOtherLanguage: string = 'https://r2media.horizondm.com/wysiwyg/smartwave/porto/flags/en.png';

  get imageUrl(): string {
    if(this.lang=='en'){
      return this.imageUrlEnglish;
    }
    else
    return this.imageUrlOtherLanguage;
  }
  constructor(private _auth:AuthService, private _router:Router, private translate: TranslateService, private cdr: ChangeDetectorRef,private categoryServices: CategoryService, private route: ActivatedRoute) {
    translate.use(this.lang);
  }
  ngOnInit(): void {
    this.lang = this.translate.currentLang;
    document.documentElement.lang = this.lang;
    this.categoryServices.GetAllCategory().subscribe({  next :(data) => {  this.CategoryList = data;}})
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
  }
 
 
}
