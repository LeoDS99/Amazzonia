import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailProductService } from '../services/detail-product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  productId!: number;
  subsc!: Subscription;
  constructor(private detail: DetailProductService) {
    this.subsc = detail.emittedProduct$.subscribe((response: any) => {
      console.log(response);
      this.productId = response;
    });
  }

  ngOnInit(): void {
    
  }
}
