import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { DetailProductService } from '../services/detail-product.service';
import { OutputnomeService } from '../services/outputnome.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() nomeCompleto!: string;
  fullsearch: boolean = false;
  nomeEmesso!: string;
  subscription!: Subscription;
  foundedProduct: any = [];

  constructor(
    private dataService: OutputnomeService,
    private detail: DetailProductService,
    private fb: FormBuilder
  ) {
    this.subscription = dataService.nameEmitted$.subscribe(
      (val) => (this.nomeEmesso = val)
    );
  }

  searchBar = this.fb.group({
    search: ['', Validators.required],
  });
  ngOnInit(): void {}
  hello() {
    console.log('ciao savio');
  }
  searchProduct(event: any) {
    this.detail.searchProduct(event.target.value).subscribe((response: any) => {
      this.foundedProduct = [];
      response.products.forEach((element: any) => {
        console.log(this.foundedProduct);
        this.foundedProduct.push(element);
      });
    });
  }
}
