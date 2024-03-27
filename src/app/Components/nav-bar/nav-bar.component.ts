import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterModule,TranslateModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {
  lang:any="en"
  
  imageUrlEnglish: string = '../../../assets/download.png';
  imageUrlOtherLanguage: string = 'https://r2media.horizondm.com/wysiwyg/smartwave/porto/flags/en.png';

  get imageUrl(): string {
    if(this.lang=='en'){
      return this.imageUrlEnglish;
    }
    else
    return this.imageUrlOtherLanguage;
  }
  constructor(private translate: TranslateService) {
    translate.use(this.lang);
  }
  ngOnInit(): void {
    this.lang = this.translate.currentLang;
    document.documentElement.lang = this.lang;

  }
  onChange(){
    if(this.lang=="en"){
      localStorage.setItem('lang','ar')
    }else
    localStorage.setItem('lang','en')
    window.location.reload()
  }
 
 
}
