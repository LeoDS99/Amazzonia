import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrello, Product } from '../models/carts.model';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor(private http: HttpClient) {}

  getSingleCart(id: number) {
    return this.http.get<Carrello>(`https://dummyjson.com/carts/user/${id}`);
  }

  addItemToCart(idCart: string | number, idProduct: string | number) {
    const body = {
      products: [
        {
          id: idProduct,
          quantity: 1,
        },
      ],
    };
    return this.http.put<Product>(
      `https://dummyjson.com/carts/${idCart}`,
      body
    );
  }
}
