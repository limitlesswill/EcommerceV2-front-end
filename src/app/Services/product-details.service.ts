import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  private baseUrl = 'https://EcommerceWebSite.somee.com/api/';

  constructor(private http: HttpClient) { }

  getProductDetails(productId: Number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}Product/ ${productId}`);
  }

  // getAll(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.baseUrl}/Products`);
  // }
}
