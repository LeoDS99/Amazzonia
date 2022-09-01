import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persone, User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class ChiamataService {
  constructor(private http: HttpClient) {}

  logInQuery(username: string) {
    return this.http.get(
      `https://dummyjson.com/users/filter?key=username&value=${username}`
    );
  }

  getProduct() {
    return this.http.get('https://dummyjson.com/products');
  }

  getCategory(){
    return this.http.get('https://dummyjson.com/products/categories/')
  }

  getSpecificProducts(category:string){
    return this.http.get(`https://dummyjson.com/products/category/${category}`)

  }
}
