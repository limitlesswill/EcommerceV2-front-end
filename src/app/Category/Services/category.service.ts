import { Injectable } from '@angular/core';

import { Header } from 'primeng/api';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory, ISubCategory } from '../Model/icategory';
import { IProduct } from '../Componenets/CategoryList/Model/iproduct';
import { environment } from '../../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CategoryApiUrl: string = environment.CategoryApiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpclient: HttpClient) { }

  GetAllCategory(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(this.CategoryApiUrl);
  }
  getallCategoryAndSubCategoryOFit(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(`${this.CategoryApiUrl}/getallCategoryAndSubCategoryOFit`);
  }
  GetCategoryById(id: number): Observable<ICategory> {
    return this.httpclient.get<ICategory>(`${this.CategoryApiUrl}/${id}`)
  }
  // getProductByCategory(id:number):Observable<IProduct[]>
  // {
  //   return this.httpclient.get<IProduct[]>(`${this.CategoryApiUrl}/${id}/getAllProductByCategory`);
  // }
  getProductsByCategory(categoryId: number, num: number, pageNum: number): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${this.CategoryApiUrl}/${categoryId}/getAllProductByCategory?num=${num}&pageNum=${pageNum}`);
  }
  getSubCategoryByCategory(id:number):Observable<ISubCategory[]>
  {
    return this.httpclient.get<ISubCategory[]>(`${this.CategoryApiUrl}/${id}/GetAllCategoryAndSubAsync`);
  }
 
}
