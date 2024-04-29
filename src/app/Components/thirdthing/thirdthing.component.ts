import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'thirdthing',
  standalone: true,
  templateUrl: './thirdthing.component.html',
  styleUrl: './thirdthing.component.css'
})
export class ThirdThingComponent {

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
