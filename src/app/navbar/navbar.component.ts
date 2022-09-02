import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { Product } from '../models/product.model';
import { DetailProductService } from '../services/detail-product.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  fullsearch: boolean = false;
  @Input() nomeEmesso!: string;
  subscription!: Subscription;

  foundedProduct!: Product[];
  navbarSub!: Subscription;

  constructor(
    private detail: DetailProductService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  nome: string = localStorage.getItem('nome')!;
  takedUserId!: string;
  searchBar = this.fb.group({
    search: ['', Validators.required],
  });
  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params['userId']))
      .subscribe((params) => {
        console.log(params);
        this.takedUserId = params['userId'];
        console.log(this.takedUserId);
      });
  }

  searchProduct(event: any) {
    this.detail.searchProduct(event.target.value).subscribe((response) => {
      this.foundedProduct = [];
      response.products.forEach((element: Product) => {
        console.log(this.foundedProduct);
        this.foundedProduct.push(element);
      });
    });
  }

  getId(id: number) {
    this.detail.getProductId(id);

    this.router
      .navigate(['dashboard/detail'], {
        queryParams: { id: id },
      })
      .then(() => {
        window.location.reload();
      });
  }

  navigateToCart() {
    this.router.navigate(['dashboard/cart'], {
      queryParams: { id: this.takedUserId },
    });
  }
}
