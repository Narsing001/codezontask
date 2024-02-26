import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
    
  CartArray:any[]=[];
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get('https://fakestoreapi.com/products');
  }

}
