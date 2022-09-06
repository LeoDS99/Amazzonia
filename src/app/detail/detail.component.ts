import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../models/product.model';
import { DetailProductService } from '../services/detail-product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  productId: number = 0;
  productInfo!: Product;

  constructor(
    private detail: DetailProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showId();
  }

  showId() {
    this.route.queryParams.subscribe((param: Params) => {
      console.log(param);
      this.productId = param['id'];
      console.log(this.productId);
    });
    this.detail.getDetailUrl(this.productId).subscribe((response) => {
      console.log(response);
      this.productInfo = response;
    });
  }
}
