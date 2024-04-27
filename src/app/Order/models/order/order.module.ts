import { AddressComponent } from './../../../Components/address/address.component';
export interface Order {
  id: number;
  finalPrice:number;
  address:string;
  date: Date; 
  state:number;
  userID:string;
}
export interface Product {
  id: number;
  enName: string;
  arName: string;
  enDescription: string;
  arDescription: string;
  imgURL: string;
  quantity: number;
  price: number;
  subCategoryId: number;
}
export interface  OrderDetails {
  id: number,
  quantity:number;
  totalPrice:number;
  productId:number;
  orderId:number; 
  productName:string;
}
export interface Cart{
  id:number,
  productId: number,
  custId: string,
  enName: string,
  arName: string,
  imgURL: string,
  quantity: number,
  totalPrice:number,
  price:number,
  discount :number
}
