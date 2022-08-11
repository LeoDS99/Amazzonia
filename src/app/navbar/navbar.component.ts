import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { DetailProductService } from '../services/detail-product.service';
import { NavbarService } from '../services/navbar.service';
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
  foundedProduct!: Product[] ;
  navbarSub!: Subscription
  showNavbar = false;

  constructor(
    private dataService: OutputnomeService,
    private detail: DetailProductService,
    private fb: FormBuilder,
    private router: Router,
    private showNav: NavbarService
  ) {
    this.subscription = dataService.nameEmitted$.subscribe(
      (val) => (this.nomeEmesso = val)
    );
  }

  searchBar = this.fb.group({
    search: ['', Validators.required],
  });
  ngOnInit(): void {
    this.navbarSub = this.showNav.showEmitted$.subscribe(resp=> {
      this.showNavbar = resp
    })
  }
  hello() {
    console.log('ciao savio');
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
    this.router.navigate([]);
    this.router.navigateByUrl('detail', { skipLocationChange: false }).then(() => {
      this.router.navigate(['detail']);
  }); 
  }
}
