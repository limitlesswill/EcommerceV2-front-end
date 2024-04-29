import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'mainslider',
  standalone: true,
  imports:[TranslateModule],
  templateUrl: './mainslider.component.html',
  styleUrl: './mainslider.component.css'
})
export class MainsliderComponent {

  lang:any; 
  langChangeSubscription: Subscription;
  
  constructor(private translate: TranslateService) {
    this.lang = localStorage.getItem('lang')
    translate.use(this.lang);
    this.langChangeSubscription = translate.onLangChange.subscribe(event => {
      this.lang = event.lang;
    });
  }
}
