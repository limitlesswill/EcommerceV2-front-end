import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent {
  lang:any="en"
  constructor(private translate: TranslateService) {
    this.lang = this.translate.currentLang;
    translate.use(this.lang);
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
