import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Persone, User } from '../models/users.model';
import { ChiamataService } from '../services/chiamata.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private chiamata: ChiamataService, private fb: FormBuilder) {}

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  logIn() {
    const usernamevalue = this.loginForm.get('username')?.value;
    const passwordvalue = this.loginForm.get('password')?.value;
    this.chiamata.logInQuery(usernamevalue!).subscribe((response: any) => {
      console.log(response);
    });
  }

  ngOnInit(): void {}
}
