import { Component, OnInit } from '@angular/core';
import { ChiamataService } from '../services/chiamata.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private chiamata: ChiamataService) {}

  getUser() {
    this.chiamata.getUser().subscribe((response) => {
      console.log(response);
    });
  }
  ngOnInit(): void {
    this.getUser();
  }
}
