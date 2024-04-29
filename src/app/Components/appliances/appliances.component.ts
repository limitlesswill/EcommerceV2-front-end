import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'appliances',
  standalone: true,
  templateUrl: './appliances.component.html',
  styleUrl: './appliances.component.css'
})
export class AppliancesComponent {

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
