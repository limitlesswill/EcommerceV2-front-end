import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent implements OnChanges {
  cropWidth:any =100;
  @Input() rating:any =0;
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * 100 / 5;
  }

  

}
