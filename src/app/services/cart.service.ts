import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrello } from '../models/carts.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getUserCart(id: number) {
    return this.http.get<Carrello>(`https://dummyjson.com/carts/${id}`);
  }
}
