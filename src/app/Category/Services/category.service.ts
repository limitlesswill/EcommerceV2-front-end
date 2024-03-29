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
  CreateCategory(category: ICategory): Observable<ICategory> {
    return this.httpclient.post<ICategory>(this.CategoryApiUrl, category, this.httpOptions);
  }
  GetCategoryById(id: number): Observable<ICategory> {
    return this.httpclient.get<ICategory>(`${this.CategoryApiUrl}/${id}`)
  }
  UpdateCategory(id: number, category: ICategory): Observable<ICategory> {
    return this.httpclient.put<ICategory>(`${this.CategoryApiUrl}/${id}`, category, this.httpOptions);
  }

  DeleteCategory(id: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.CategoryApiUrl}/${id}`);
  }

  getProductByCategory(id:number):Observable<IProduct[]>
  {
    return this.httpclient.get<IProduct[]>(`${this.CategoryApiUrl}/${id}/getAllProductByCategory`);
  }
  getSubCategoryByCategory(id:number):Observable<ISubCategory[]>
  {
    return this.httpclient.get<ISubCategory[]>(`${this.CategoryApiUrl}/${id}/GetAllCategoryAndSubAsync`);
  }
}
