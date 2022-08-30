import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ChiamataService } from '../services/chiamata.service';
import { DetailProductService } from '../services/detail-product.service';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private router: Router,
    private http: ChiamataService,
    private detail: DetailProductService,
    private navbar: NavbarService
  ) {}
  products!: any;

  ngOnInit(): void {
    this.getProduct();
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
}
