import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product, RootObject } from '../models/product.model';
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

  constructor(
    private detail: DetailProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.subsc = this.detail.emittedProduct$.subscribe((response: any) => {
    //   this.productId = response;
    // });
    this.showId();
  
  }

  // this.getDetail();

  showId() {
    this.route.queryParams.subscribe((param) => {
      console.log(param);
      this.productId = param['id'];
      console.log(this.productId);
    });
    this.detail.getDetailUrl(this.productId).subscribe((response) => {
      console.log(response);
      this.productInfo = response;
    });
  }

 
  // getDetail() {
  //   return this.detail.getDetailUrl(this.productId).subscribe((response: Product) => {
  //     this.productInfo = response;
  //   })
  // }
}
