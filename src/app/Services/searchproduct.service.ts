import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Order/models/order/order.module';



@Injectable({
  providedIn: 'root'
})
export class SearchproductService {
  private baseUrl = 'https://EcommerceWebSite.somee.com/api/Product/';
  
  constructor(private http: HttpClient) { }

  getSearchProducts(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}${name}/SearchByName`);
  }
}

