import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  // template:`<h1>Test</h1>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // data binding => Interpolation {{title}}
  title:string = 'First Project';
  numberOne : number = 10;
  numbertwo : number = 20;

  add()
  {
    return this.numberOne + this.numbertwo;
  }

  SayHello(name:string)
  {
    return "Hello "+name;
  }

}
