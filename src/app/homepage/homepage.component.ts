import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ChiamataService } from '../services/chiamata.service';
import { DetailProductService } from '../services/detail-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private router: Router,
    private http: ChiamataService,
    private route: ActivatedRoute,
    private cartService: CartServiceService
  ) {
    this.route.queryParams
      .pipe(filter((params) => params['userId']))
      .subscribe((params) => {
        console.log(params); // { category: "fiction" }
        this.userId = params['userId'];
        console.log(this.userId); // fiction
      });
  }
  products!: any;
  userId!: any;
  cartId!: any;
  ngOnInit(): void {
    this.getProduct();
    this.getCartId();
  }
  getProduct() {
    this.http.getProduct().subscribe((response: any) => {
      this.products = response.products;
      console.log(this.products);
    });
  }

  getDetail(parameter: number) {
    this.router.navigate(['dashboard/detail'], {
      queryParams: { id: parameter },
    });
  }

  getCartId() {}

  addToCart(productId: any) {
    this.cartService.getSingleCart(this.userId).subscribe((response: any) => {
      this.cartId = response.carts[0].id;
      console.log(this.cartId);
      this.cartService
        .addItemToCart(this.cartId, productId)
        .subscribe((response) => {
          console.log(response);
        });
    });
  }
}
