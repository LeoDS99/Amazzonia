import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, ProductInterface } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DetailProductService {
  private subject = new BehaviorSubject<any>(null);
  emittedProduct$: any = this.subject.asObservable();
  constructor(private http: HttpClient) {}

  getDetailUrl(id: number) {
    return this.http.get<Product>(`https://dummyjson.com/products/${id}`);
  }

  getProductId(value: number) {
    this.subject.next(value);
  }

  searchProduct(value: string) {
    return this.http.get<ProductInterface>(
      `https://dummyjson.com/products/search?q=${value}`
    );
  }
}
