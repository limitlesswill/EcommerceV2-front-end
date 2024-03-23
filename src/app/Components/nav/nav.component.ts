
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
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
