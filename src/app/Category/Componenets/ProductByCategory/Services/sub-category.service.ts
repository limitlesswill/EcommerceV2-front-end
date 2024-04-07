import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../../CategoryList/Model/iproduct';
import { Observable } from 'rxjs';
import { ISubCategory } from '../Model/isub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  SubCategoryApiUrl: string = environment.SubCategoryApiUrl;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpclient: HttpClient) { }

  getProductBySubCategory(id:number , num: number, pageNum: number):Observable<IProduct[]>
  {
    return this.httpclient.get<IProduct[]>(`${this.SubCategoryApiUrl}/${id}/getProductonlyfromSubCategory?num=${num}&pageNum=${pageNum}`);
  }

 
  
}
