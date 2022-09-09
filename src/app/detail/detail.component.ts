import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
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
  ) {
    this.showId();
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }
  ngOnInit(): void {}

  // showId() {
  //  this.productSub = this.route.queryParams.subscribe((param: Params) => {
  //     console.log(param);
  //     this.productId = param['id'];
  //     console.log(this.productId);
  //     this.detail.getDetailUrl(this.productId).subscribe((response: Product) => {
  //       console.log(response);
  //       this.productInfo = response;
  //       console.log(this.productInfo)
  //     });
  //   });

  // }
  showId() {
    this.productSub = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.detail.getDetailUrl(+params.get('id')!)
        )
      )
      .subscribe((response) => (this.productInfo = response));
  }

  // showId() {
  //   this.productSub = this.route.params
  //     .pipe(
  //       switchMap((params: Params) =>
  //         this.detail.getDetailUrl(params['id'])
  //       )
  //     )
  //     .subscribe((response) => (this.productInfo = response));
  
  // } versione col param
}
