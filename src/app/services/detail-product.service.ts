import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product, RootObject } from '../models/product.model';
import { ChiamataService } from './chiamata.service';

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
    return this.http.get<RootObject>(`https://dummyjson.com/products/search?q=${value}`);
  }
}
