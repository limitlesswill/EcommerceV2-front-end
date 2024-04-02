import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { OrderDetails,  } from '../models/order/order.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  OrderDetailsApiUrl:string = environment.OrderDetailsApiUrl;
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  GetAllOrderDetails():Observable<OrderDetails[]> {
    return this.http.get<OrderDetails[]>(this.OrderDetailsApiUrl);
  }
  CreateOrderDetails(OrderDetails:OrderDetails):Observable<OrderDetails>
  {
    return this.http.post<OrderDetails>(this.OrderDetailsApiUrl,OrderDetails , this.httpOptions);
  }
  GetOrderDetailsById(id : number) : Observable<OrderDetails>
  {
    return this.http.get<OrderDetails>(`${this.OrderDetailsApiUrl}/${id}`);
  }
  UpdateOrderDetails(id:number,OrderDetails:OrderDetails) : Observable<OrderDetails>
  {
    return this.http.put<OrderDetails>(`${this.OrderDetailsApiUrl}/${id}`,OrderDetails , this.httpOptions);
  }
  DeleteOrder(id:number) : Observable<void>
  {
    return this.http.delete<void>(`${this.OrderDetailsApiUrl}/${id}`);
  }

  GetOrdersDetails(OId:number):Observable<OrderDetails[]> {
    return this.http.get<OrderDetails[]>(`${this.OrderDetailsApiUrl}/${OId}/GetAllOrderDetails`);
  }

}
