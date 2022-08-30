import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  nomeEmesso!: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.showName();
  }

  // showName() {
  //   this.route.queryParams.subscribe((param) => {
  //     console.log(param);
  //     this.nomeEmesso = param['name'];
  //     console.log(this.nomeEmesso);
  //   });
  // }
}
