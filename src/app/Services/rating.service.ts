import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  getProductComments(productId: Number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}Comment/product/ ${productId}`);
  }

  makeProductComment( comment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Comment`, comment);
  }

}
