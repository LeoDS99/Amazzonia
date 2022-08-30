import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor(private http: HttpClient) {}

  getSingleCart(id: number) {
    return this.http.get(`https://dummyjson.com/carts/user/${id}`);
  }
}
