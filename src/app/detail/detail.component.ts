import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { DetailProductService } from '../services/detail-product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  productId: number = 0;
  productInfo!: Product;
  productSub!: Subscription;

  constructor(
    private detail: DetailProductService,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.showId();
  }

  showId() {
    this.route.queryParams.subscribe((param: Params) => {
      console.log(param);
      this.productId = param['id'];
      console.log(this.productId);
    });
    this.detail.getDetailUrl(this.productId).subscribe((response: Product) => {
      console.log(response);
      this.productInfo = response;
    });
  }
}
