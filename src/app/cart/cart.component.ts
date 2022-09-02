import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrello } from '../models/carts.model';
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
  Userofcart!: number;
  ngOnInit(): void {
    this.showId();
    this.getCart();
  }
  cart!: Carrello;
  getCart() {
    this.cartService.getSingleCart(this.Userofcart).subscribe((response) => {
      console.log(response);
      this.cart = response;
    });
  }
  showId() {
    this.route.queryParams.subscribe((param) => {
      console.log(param);
      this.Userofcart = param['id'];
      console.log(this.Userofcart);
    });
  }
}
