import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Order,  } from '../models/order/order.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  OrderApiUrl:string = environment.OrderApiUrl;
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  GetAllOrder():Observable<Order[]> {
    return this.http.get<Order[]>(this.OrderApiUrl);
  }
  CreateOrder(Order:Order):Observable<Order>
  {
    return this.http.post<Order>(this.OrderApiUrl,Order , this.httpOptions);
  }
  GetOrderById(id : number) : Observable<Order>
  {
    return this.http.get<Order>(`${this.OrderApiUrl}/${id}`);
  }
  UpdateOrder(id:number,Order:Order) : Observable<Order>
  {
    return this.http.put<Order>(`${this.OrderApiUrl}/${id}`,Order , this.httpOptions);
  }
  DeleteOrder(id:number) : Observable<void>
  {
    return this.http.delete<void>(`${this.OrderApiUrl}/${id}`);
  }

  GetUserOrders(UId:string):Observable<Order[]> {
    return this.http.get<Order[]>(`${this.OrderApiUrl}/${UId}/GetUseOrders`);
  }

}
