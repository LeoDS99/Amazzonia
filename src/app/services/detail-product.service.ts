import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ChiamataService } from './chiamata.service';

@Injectable({
  providedIn: 'root',
})
export class DetailProductService {
  private subject = new Subject<any>();
  emittedProduct$: any = this.subject.asObservable();
  constructor(private http: HttpClient) {}

  getDetailUrl(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

  getProductId(value: number) {
    this.subject.next(value);
  }
}
