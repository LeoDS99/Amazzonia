import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { DetailProductService } from '../services/detail-product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  productId: number = 0;
  subsc!: Subscription;
  productInfo!: Product;

  constructor(private detail: DetailProductService) {

  }

  
  ngOnInit(): void {
    this.subsc = this.detail.emittedProduct$.subscribe((response: any) => {
      this.productId = response
    });

    this.getDetail();
  }
  
  getDetail() {
    return this.detail.getDetailUrl(this.productId).subscribe((response: any) => {
      this.productInfo = response;
    })
  }
}
