export interface Order {
  id: number;
  UserID: string ;
  FinalPrice:number;
  DateTime: Date; 
  State:string;
}
export interface  OrderDetails {

  id: number,
  Quantity:number;
  TotalPrice:number;
  Product :Product;
  Order: Order;
}
export interface Product {

  id: number,
  Name:string;
  description: string,
  image:string,
  Quantity:number;
  Price:number;
  
}

