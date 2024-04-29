import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'item1',
  standalone: true,
  imports: [RouterOutlet,TranslateModule],
  templateUrl: './item1.component.html',
  styleUrl: './item1.component.css'
})
export class Item1Component {

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
