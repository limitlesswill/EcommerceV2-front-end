import { ProductDetailsComponent } from './../Components/product-details/product-details.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private Items:any[]= JSON.parse(localStorage.getItem('CartItems')||"[]");
private Total:number=0;

  constructor() { }

  AddtoCart(Product:any) {
    let Item = this.Items.find(i => i.Id== Product.Id);
    if(Item==null)
   {this.Items.push({...Product,wanted:1});
  localStorage.setItem('CartItems',JSON.stringify(this.Items));
  } 

  }
  getTotal(){
    localStorage.setItem('CartItems',JSON.stringify(this.Items));
    this.Total= this.Items.reduce((acc, item) =>{return acc += item.price*item.wanted},0);
    localStorage.setItem('CartsTotal',JSON.stringify(this.Total));
 return this.Total;
  }
  getItemPrice(Id:number ){
    let item = this.Items.find(i => i.Id==Id);
    return item.price*item.wanted;
  }
  getItems() {return this.Items;}


  delete(Item:any) {
      this.Items =  this.Items.filter(i =>i.Id !== Item.Id);
      localStorage.setItem('CartItems',JSON.stringify(this.Items));
    }
  IncreamentQuantity(Id:number ){
    let Item = this.Items.find(i => i.Id==Id);    
    Item.wanted++;
    localStorage.setItem('CartItems',JSON.stringify(this.Items));
  } 
  DecreamentQuantity(Id:number ){
    let Item = this.Items.find(i => i.Id==Id); 
    Item.wanted--;
    if(Item.wanted<=0)
    {
      this.Items =  this.Items.filter(i =>i.Id !== Item.Id);
    }
    localStorage.setItem('CartItems',JSON.stringify(this.Items));
  } 
  
}
