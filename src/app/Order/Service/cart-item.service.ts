import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Cart,  } from '../models/order/order.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  CartApiUrl:string = environment.CartApiUrl;
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  GetAllCart():Observable<Cart[]> {
    return this.http.get<Cart[]>(this.CartApiUrl);
  }
  CreateCart(Cart:Cart):Observable<Cart>
  {
    return this.http.post<Cart>(this.CartApiUrl,Cart,this.httpOptions);
  }
  GetCartById(id : number) : Observable<Cart>
  {
    return this.http.get<Cart>(`${this.CartApiUrl}/${id}`);
  }
  UpdateCart(id:number,Cart:Cart) : Observable<Cart>
  {
    return this.http.put<Cart>(`${this.CartApiUrl}/${id}`,Cart , this.httpOptions);
  }
  DeleteCart(id:number) : Observable<void>
  {
    return this.http.delete<void>(`${this.CartApiUrl}/${id}`);
  } 
  GetUserCart(UId:string):Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.CartApiUrl}/${UId}/GetUserCartItems`);
  }

}
