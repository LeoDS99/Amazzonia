import { Component, OnInit } from '@angular/core';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { GetUserIdService } from '../services/get-user-id.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private getUserId: GetUserIdService
  ) {}
  subs!: Subscription;
  userId!: number;
  ngOnInit(): void {}

  getCart() {
    this.cartService.getUserCart(1).subscribe((response) => {
      console.log(response);
    });
  }
}
