import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartServiceService,
    private route: ActivatedRoute
  ) {}
  cartId!: number;
  ngOnInit(): void {
    this.showId();
    this.getCart();
  }
  cart!: any;
  getCart() {
    this.cartService.getSingleCart(this.cartId).subscribe((response) => {
      console.log(response);
      this.cart = response;
    });
  }
  showId() {
    this.route.queryParams.subscribe((param) => {
      console.log(param);
      this.cartId = param['id'];
      console.log(this.cartId);
    });
  }
}
