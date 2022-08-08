import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Persone, User } from '../models/users.model';
import { ChiamataService } from '../services/chiamata.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private chiamata: ChiamataService) {}

  getUser() {
    this.chiamata.getUser().subscribe((response: Persone) => {
      console.log(response.users.forEach((element) => console.log(element)));
    });
  }
  ngOnInit(): void {
    this.getUser();
  }
}
